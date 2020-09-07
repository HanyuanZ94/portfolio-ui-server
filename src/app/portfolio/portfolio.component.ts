import {Component, OnInit, ViewChild} from '@angular/core';
// @ts-ignore
import projects from 'src/assets/data/portfolio.json';
import {Project} from '../../model/project';
import {MatDialog} from '@angular/material/dialog';
import {ProjectDetailDialogComponent} from '../project-detail-dialog/project-detail-dialog.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = projects;
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

  showProjectDetail() {
    this.dialog.open(ProjectDetailDialogComponent, {
      data: 'test'
    });
  }
}
