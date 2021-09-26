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
          <div className="row m-0">
            
              <div className="col-md-4">
                <div className="portfolio-item">
                  <div className="img-placement">
                    
                  </div>
                  <div className="portfolio-content"> 

                    
                  </div>
                </div>
              </div>  
 
          </div>
        </div>
      </div>
    )
};