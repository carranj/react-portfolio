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

    constructor(){

        this.projects = new State<Project[]>([]);
            this.fetchAllProjects();
    }

    async fetchAllProjects() {
        try {
            console.log('fetching projects');
            const response = await api.get('get-all-projects');

            const portfolioItem = response.data.map((portfolioItem: any) => portfolioItem as Project);

            this.projects.next(portfolioItem);

        } catch (e) {
            return Promise.reject(e);
        }
    };
}

export const projectsState = new ProjectsState();