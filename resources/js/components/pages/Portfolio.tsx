import React, { useState, useEffect } from "react";
import {Link } from "react-router-dom";
import { projectsState } from "../store";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



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
  const [isLoading] = projectsState.isLoading.hook();

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
    );


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
            <FormControl fullWidth={true}>
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
            

          </div>
          
          {
              isLoading &&(
                <div className="row">

                  <div className="col-md-4 offset-md-4">
                    <img src="/images/loading.gif" alt="" />
                  </div>
                </div>
              )
            }
          <div className="row m-0">          

                {filteredProjects.map((project, index) => (
                  <div key={index} className="col-md-4">
                    <div className="portfolio-item">
                      <div className="img-placement">
                      <Link to={"/portfolio/" + project.shortname } >
                        <img className="img-fluid profile-photo" src={"/images/projects/" + project.shortname + ".jpg"} alt=""/>
                      </Link>
                      </div>
                      <div className="portfolio-content"> 
                    <h2><Link to={"/portfolio/" + project.shortname } >{project.name}</Link></h2>
                    <div className="skillsSection">
                      <div className="skills d-flex flex-wrap">
                        {project.skills.map((skill, index) => (
                          <div className="skill">
                            <p className={"skill " + skill.classname} key={index}>{skill.skillName}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
                  
                ))}

             
          
          

 
          </div>
        </div>
      </div>
    )
};