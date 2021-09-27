import React from "react";
import { projectsState } from "../store";

export const Project = () => {

    return (
        <div className="container-fluid single-portfolio">
            <div className="row intro m-0">
                <div className="col-md-8">
                    <div className="name">
                        {/* <h1>{project.name}</h1> */}
                        <div className="skillsSection">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="d-inline float-left mr-3">Skills</h2>
                                    <div className="skills d-inline float-left">
                                        {/* {project.skills.map(function(skill, index){
                                            return <span className={'skill ' + skill.value.toLowerCase().split(' ').join('')}>{skill.value}</span>
                                        })} */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <p>I'm a web developer and specialize in web development. I primarily build Angular applications and custom WordPress websites. I serve as a Full Stack Developer in Houston. Click here to see samples of my featured work or continue reading below to learn more of my interactive journey.</p>
                    </div>
                </div>
                <div className="col-md-4 profilephoto text-center">
                    {/* <img className="img-fluid profile-photo" src={project.imageLocation} alt=""/> */}
                    {/* <a href={project.url} className="btn btn-info mt-3" role="button" target="_blank">Preview Demo</a> */}
                </div>
            </div>
         
        </div>
    )
};