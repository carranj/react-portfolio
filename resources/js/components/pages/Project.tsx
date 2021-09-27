import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projectsState } from "../store";

export const Project = () => {
    const [selectedProject] = projectsState.selectedProject.hook();
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
                                    <h2 className="d-inline float-left mr-3">Skills</h2>
                                    <div className="skills d-inline float-left">
                                       <p>test</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>I'm a web developer and specialize in web development. I primarily build Angular applications and custom WordPress websites. I serve as a Full Stack Developer in Houston. Click here to see samples of my featured work or continue reading below to learn more of my interactive journey.</p>
                    </div>
                </div>
                <div className="col-md-4 profilephoto text-center">
                    <img className="img-fluid profile-photo" src={"/images/projects/" + selectedProject?.shortname + ".jpg"} alt=""/>
                </div>
            </div> 
        </div>
    )
};