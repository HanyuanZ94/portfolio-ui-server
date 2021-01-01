import {Component, OnInit, ViewChild} from '@angular/core';
// @ts-ignore
import projects from 'src/assets/data/portfolio.json';
import projectDetails from 'src/assets/data/project-details.json';
import {Project} from '../../model/project';
import {MatDialog} from '@angular/material/dialog';
import {ProjectDetailDialogComponent} from '../project-detail-dialog/project-detail-dialog.component';
import {ProjectDetails} from '../../model/project-details';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = projects;
  projectDetails: ProjectDetails[] = projectDetails;
  selectedTag: string;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  onSelectTag(tag: string) {
    if (this.selectedTag === tag) {
      this.selectedTag = '';
    } else {
      this.selectedTag = tag;
    }
  }

  isCardVisible(project: Project) {
    if (this.selectedTag && this.selectedTag !== '') {
      return project.tags.includes(this.selectedTag);
    }
    return true;
  }

  showProjectDetail(name: string) {
    this.dialog.open(ProjectDetailDialogComponent, {
      data: projectDetails.find(detail => detail.projectName === name)
    });
  }
}
