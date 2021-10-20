import React from "react";
import {Link } from "react-router-dom";
import { projectsState } from "../store";

export const Portfolio = () => {
  const [projects] = projectsState.projects.hook();

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
              <h4 className="text-center">Enter Passcode to view all projects</h4>
            </div>
          </div>
          <div className="row m-0">
            {projects.map((project, index) => (
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