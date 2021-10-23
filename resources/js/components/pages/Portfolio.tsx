import React, { useState, useEffect } from "react";
import {Link } from "react-router-dom";
import { projectsState } from "../store";

import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';


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
  const [isAuthorized] = projectsState.isAuthorized.hook();
  const [projects] = projectsState.projects.hook();
  const [allSkills] = projectsState.allSkills.hook();
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [skillName, setSkillName] = useState<string>('');
  const [authCode, setAuthCode] = useState<string>('');

  const handleChange  = (event: any) => {
       setSkillName(event.target.value);
  };

  const handleAuth = async () =>{
    projectsState.fetchAuthorization(authCode);
  }

  useEffect( () => {
    setFilteredProjects(
      skillName==='' ? projects :
        projects.filter((project:any) => project.skills
        .some((skill:any) => skill.skillName === skillName ) )
    )

  }, [projects,skillName]);

  useEffect( ()=>{
    projectsState.fetchAllProjects();
  }, [isAuthorized]);


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
            <div className="col-md-4">
              <p
                style={{
                  paddingTop:10,
                  paddingBottom:0,
                  paddingLeft:15,
                  paddingRight:15
                }}>
                  Filter projects by skill{isAuthorized === 0 && <span> or enter code to see all projects</span>}
              </p>
            </div>
            <div className="col-md-4">
            <FormControl sx={{ m: 1 }} fullWidth={true}>
                <InputLabel id="select-skills">Skills</InputLabel>
                <Select
                  labelId="select-skills"
                  id="select-skill"
                  value={skillName}
                  label="Skill"
                  onChange={handleChange}
                  MenuProps={MenuProps}
                  style={{
                    backgroundColor:'white',
                  }}

                >
                  <MenuItem
                      value=''
                    >
                      All Skills
                    </MenuItem>
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
            <div className="col-md-4">
              {(isAuthorized === 0 )&& (
                <>
                  <FormControl sx={{ m: 1 }} fullWidth={true}>
                    <TextField
                      id="authorize"
                      label="Enter Passcode"
                      variant="outlined"
                      onChange={(e) => setAuthCode(e.target.value)}
                      style={{
                        backgroundColor:'white'
                      }}
                      InputProps={{endAdornment: <Button variant="contained" onClick={handleAuth} >Authorize</Button>}} />
                  </FormControl>
                </>
              )}
              
              {(isAuthorized === 1) &&(
                <>
                <p>Authorized</p>
                </>
              )}
            
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