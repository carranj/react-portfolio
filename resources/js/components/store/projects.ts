import { api } from '../../api';
import { State } from "./state";
import { combineLatest, Subscription } from 'rxjs';

export interface Project {
    id:number,
    name:string,
    shortname:string,
    featured:number,
    url:string,
    shortDescription:string,
    description:string
}

class ProjectsState {
    
    public projects: State<Project[]>;
    public selectedProject: State<Project | number>;

    constructor(){
        this.selectedProject = new State<Project | number>(1);
        this.projects = new State<Project[]>([]);
            this.fetchAllProjects();

            this.selectedProject.subscribe((project:any) => {
                if(project !== null){
                    this.fetchProject(project.id)
                }
            })
    }

    async fetchAllProjects() {
        try {
            const response = await api.get('get-all-projects');

            const portfolioItem = response.data.map((portfolioItem: any) => portfolioItem as Project);

            this.projects.next(portfolioItem);
            this.selectedProject.next(portfolioItem[0]);

        } catch (e) {
            return Promise.reject(e);
        }
    };
    async fetchProject(id:number) {
        try{
            const response = await api.get('get-project', {
                params: {
                    id:id
                }
            });
            const projectItem = response.data.map((selectedItem: any) => selectedItem as Project);
            this.selectedProject.next(projectItem[0]);
            
        } catch(e){
            return Promise.reject(e);
        }
    }
}

export const projectsState = new ProjectsState();