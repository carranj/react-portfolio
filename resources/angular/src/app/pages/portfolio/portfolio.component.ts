import { Component, OnInit } from '@angular/core';

interface Skill {
  skillId: number;
  skillName: string;
  classname: string;
}

interface Project {
  name: string;
  shortname: string;
  skills: Skill[];
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  allSkills: Skill[] = [];
  selectedSkill: string = '';
  isLoading: boolean = false;

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    // Mock data for now - will connect to API later
    this.projects = [
      {
        name: 'Sample Project 1',
        shortname: 'sample1',
        skills: [
          { skillId: 1, skillName: 'Angular', classname: 'angular' },
          { skillId: 2, skillName: 'TypeScript', classname: 'typescript' }
        ]
      },
      {
        name: 'Sample Project 2',
        shortname: 'sample2',
        skills: [
          { skillId: 3, skillName: 'WordPress', classname: 'wordpress' },
          { skillId: 4, skillName: 'PHP', classname: 'php' }
        ]
      }
    ];

    this.allSkills = [
      { skillId: 1, skillName: 'Angular', classname: 'angular' },
      { skillId: 2, skillName: 'TypeScript', classname: 'typescript' },
      { skillId: 3, skillName: 'WordPress', classname: 'wordpress' },
      { skillId: 4, skillName: 'PHP', classname: 'php' }
    ];

    this.filteredProjects = [...this.projects];
  }

  filterProjects() {
    if (this.selectedSkill === '') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(project =>
        project.skills.some(skill => skill.skillName === this.selectedSkill)
      );
    }
  }
}
