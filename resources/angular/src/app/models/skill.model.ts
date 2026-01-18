export interface Skill {
  skillId: number;
  skillName: string;
  classname: string;
}

export interface GetAllSkillsResponse {
  data?: Skill[];
  error?: string;
}
