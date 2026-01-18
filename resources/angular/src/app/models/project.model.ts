import { Skill } from './skill.model';

export interface ProjectSkill {
  skillName: string;
  classname: string;
}

export interface Project {
  id: number;
  name: string;
  shortname: string;
  featured: number;
  url: string | null;
  shortDescription: string | null;
  isPrivate: number;
  submitDate: string;
  skills: ProjectSkill[];
}

export interface GetAllProjectsResponse {
  data?: Project[];
  error?: string;
}
