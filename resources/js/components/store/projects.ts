import { api } from '../../api';
import { State } from "./state";
import { Subscription } from 'rxjs';

interface Project {
    id:number;
    name:string;
    shortname:string;
    featured:number;
    url:string;
    shortDescription:string;
    description:string;
}

class ProjectsState {
    
    public projects: State<Project[]>;
    public selectedProject: State<Project | null>;


    constructor(){
        this.selectedProject = new State<Project | null>(null);
        this.projects = new State<Project[]>([]);
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
            
            return Promise.resolve();
            
        } catch(e){
            return Promise.reject(e);
        }
    }
}

export const projectsState = new ProjectsState();