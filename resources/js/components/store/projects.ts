import { api } from '../../api';
import { State } from "./state";

interface Project {
    id:number;
    name:string;
    shortname:string;
    featured:number;
    url:string;
    shortDescription:string;
}

interface Skills {
    id:number;
    description:string;
    class:string;
}

interface Description {
    order:number;
    title:string;
    description:string;
}

class ProjectsState {
    
    public projects: State<Project[]>;
    public selectedProject: State<Project | null>;
    public skills: State<Skills[]>;
    public descriptions: State<Description[]>;


    constructor(){
        this.selectedProject = new State<Project | null>(null);
        this.projects = new State<Project[]>([]);
        this.skills = new State<Skills[]>([]);
        this.descriptions = new State<Description[]>([]);
            this.fetchAllProjects();

    }

    async fetchAllProjects() {
        try {
            const response = await api.get('get-all-projects');

            const portfolioItem = response.data.map((portfolioItem: any) => portfolioItem as Project);

            this.projects.next(portfolioItem);

            return Promise.resolve();

        } catch (e) {
            return Promise.reject(e);
        }
    };
    async fetchProject(shortname:string) {
        try{
            const response = await api.get('get-project', {
                params: {
                    shortname:shortname
                }
            });
            const projectItem = response.data as Project;
            this.selectedProject.next(projectItem);


            const skillsResponse = await api.get('get-project-skills', {
                params: {
                    id:projectItem.id
                }
            });
            const skills = skillsResponse.data.map((skill: any) => skill as Skills);
            this.skills.next(skills);

            const descriptionResponse = await api.get('get-project-description', {
                params: {
                    id:projectItem.id
                }
            });
            const descriptions = descriptionResponse.data.map((description: any) => description as Description);
            this.descriptions.next(descriptions);
            
            return Promise.resolve();
            
        } catch(e){
            return Promise.reject(e);
        }
    }
}

export const projectsState = new ProjectsState();