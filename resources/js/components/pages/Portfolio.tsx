import React, { useEffect } from "react";
import {Link } from "react-router-dom";
import { projectsState } from "../store";

export const Portfolio = () => {
  const [projects] = projectsState.projects.hook();
  const [selectedProject,setSelectedProject] = projectsState.selectedProject.hook();
  
  useEffect(() => {
    if(selectedProject !== null){

    };
}, [selectedProject]);

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
          <div className="row m-0">
          {projects.map((project) => (
            <div className="col-md-4">
               <div className="portfolio-item">
                 <div className="img-placement">
                   <img className="img-fluid profile-photo" src={"/images/projects/" + project.shortname + ".jpg"} alt=""/>
                 </div>
                 <div className="portfolio-content"> 
               <h2><Link to={"/portfolio/" + project.shortname } onClick={() =>{setSelectedProject(project.id)}}>{project.name}</Link></h2>
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