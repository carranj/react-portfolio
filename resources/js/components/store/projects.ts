import { api } from '../../api';
import { State } from "./state";

interface Project {
    id:number;
    name:string;
    shortname:string;
    featured:number;
    url:string;
    shortDescription:string;
    skills:any[]
}

interface Skills {
    skillId:number;
    skillName:string;
    classname:string;
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
    public allSkills: State<Skills[]>;
    public descriptions: State<Description[]>;
    public isAuthorized: State<number>;
    public isLoading: State<boolean>;


    constructor(){
        this.isAuthorized = new State<number>(0);
        this.isLoading = new State<boolean>(false);
        this.selectedProject = new State<Project | null>(null);
        this.projects = new State<Project[]>([]);
        this.skills = new State<Skills[]>([]);
        this.allSkills = new State<Skills[]>([]);
        this.descriptions = new State<Description[]>([]);
            this.fetchAllProjects();
            this.fetchAllSkills();

    }

    async fetchAuthorization(authCode:string) {
        try{
            this.isLoading.next(true);
            const response = await api.get('verify', {
                params:{
                    authCode: authCode
                }
            });

            const authResponse = response;
            if (authResponse.status === 201){
                this.isAuthorized.next(1);
            }
            this.isLoading.next(false);
            Promise.resolve();
        } catch(e){
            Promise.reject(e);
        }
    }

    async fetchAllProjects() {
        try {
            this.isLoading.next(true);
            const response = await api.get('get-all-projects',{
                params:{
                    authorized: this.isAuthorized.getValue()
                }
            });

            const portfolioItem = response.data.map((portfolioItem: any) => portfolioItem as Project);

            this.projects.next(portfolioItem);
            this.isLoading.next(false);
            return Promise.resolve();

        } catch (e) {
            return Promise.reject(e);
        }
    };
    async fetchProject(shortname:string) {
        try{
            this.isLoading.next(true);
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
            this.isLoading.next(false);
            return Promise.resolve();
            
        } catch(e){
            return Promise.reject(e);
        }
    }

    async fetchAllSkills(){
        try{
            this.isLoading.next(true);
            const response = await api.get('get-all-skills');
            const skills = response.data.map((skill: any) => skill as Skills);
            this.allSkills.next(skills);
            this.isLoading.next(false);
           
        } catch(e){
            return Promise.reject(e);
        }
    }
}

export const projectsState = new ProjectsState();