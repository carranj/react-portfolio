import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projectsState } from "../store";
import {Button} from "@material-ui/core";

export const Project = () => {
    const [selectedProject] = projectsState.selectedProject.hook();
    const [skills] = projectsState.skills.hook();
    const [descriptions] = projectsState.descriptions.hook();
    const {shortname} = useParams<{shortname:string}>();

    useEffect( ()=>{
        if(shortname !== null){
            projectsState.fetchProject(shortname);
        }
    },[shortname]);
    
    return (
        <div className="container-fluid single-portfolio">
            <div className="row intro m-0">
                <div className="col-md-8">
                    <div className="name">
                        <h1>{selectedProject?.name}</h1>
                        <div className="skillsSection">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="d-inline float-left mr-3">Skills: </h2>
                                    <div className="skills d-flex flex-wrap">
                                        <div className="skill">
                                            {skills.map((skill, index) => (
                                                <p className={"skill " + skill.classname} key={index}>{skill.skillName}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-2">
                                        {descriptions.map((description, index) => (
                                            <div key={index}>
                                                    <h3>{description.title}</h3>
                                                <p>{description.description}</p>
                                            </div>
                                        ))}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 profilephoto text-center">
                    <img className="img-fluid profile-photo" src={"/images/projects/" + selectedProject?.shortname + ".jpg"} alt=""/>
                    {selectedProject?.url && (
                        <div className='mt-2'>
                            <Button variant="outlined" target="_blank" href={selectedProject.url}>View Site</Button>
                        </div>
                                
                            )
                        
                    }
                </div>
            </div> 
        </div>
    )
};