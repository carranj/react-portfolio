import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { Skill } from '../../models/skill.model';

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
  errorMessage: string = '';

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.loadProjects();
    this.loadSkills();
  }

  loadProjects(): void {
    this.isLoading = true;
    this.projectService.getAllProjects().subscribe({
      next: (projects: Project[]) => {
        this.projects = projects;
        this.filteredProjects = [...projects];
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
        this.errorMessage = 'Failed to load projects. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  loadSkills(): void {
    this.projectService.getAllSkills().subscribe({
      next: (skills: Skill[]) => {
        this.allSkills = skills;
      },
      error: (error) => {
        console.error('Error loading skills:', error);
      }
    });
  }

  filterProjects(): void {
    if (this.selectedSkill === '') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(project =>
        project.skills.some(skill => skill.skillName === this.selectedSkill)
      );
    }
  }
}
