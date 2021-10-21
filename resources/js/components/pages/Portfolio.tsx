import React, { useState, useEffect } from "react";
import {Link } from "react-router-dom";
import { projectsState } from "../store";

import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 36;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

export const Portfolio = () => {
  const [projects] = projectsState.projects.hook();
  const [allSkills] = projectsState.allSkills.hook();
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [skillName, setSkillName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof skillName>) => {
 
    const {
      target: { value },
    } = event;
    setSkillName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  useEffect( () => {

    setFilteredProjects(skillName===[] ? projects :  projects.filter(data => data.skills  ) )

  }, [projects,skillName]);


    return (
      <div className="container-fluid portfolio p-0">
        <div className="portfolio-landing-intro">
          <div className="row m-0">
            <div className="col-md-6 offset-md-1">
              <h1>Portfolio</h1>
              <p> Some of my featured work is listed below. These projects include custom WordPress sites, Angular applications, advanced JavaScript projects, and custom branding projects.</p>
            </div>
            <div className="col-md-5"></div>
          </div>
        </div>

        <div className="portfoliolists">
          <div className="row mb-3 categoryFilters">
            <div className="col-md-12">
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-chip-label">Skills</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={skillName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Skills" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
                style={{
                  backgroundColor:'white'
                }}

              >
                {allSkills.map((skill, index) => (
                  <MenuItem
                    key={skill.skillId}
                    value={skill.skillName}
                  >
                    {skill.skillName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            </div>
          </div>
          <div className="row m-0">

          
            {filteredProjects.map((project, index) => (
              <div key={index} className="col-md-4">
                <div className="portfolio-item">
                  <div className="img-placement">
                    <img className="img-fluid profile-photo" src={"/images/projects/" + project.shortname + ".jpg"} alt=""/>
                  </div>
                  <div className="portfolio-content"> 
                <h2><Link to={"/portfolio/" + project.shortname } >{project.name}</Link></h2>
                <p>{project.shortDescription}</p>
                </div>
              </div>
            </div>  
            ))}  

 
          </div>
        </div>
      </div>
    )
};