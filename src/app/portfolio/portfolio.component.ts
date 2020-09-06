import {Component, OnInit, ViewChild} from '@angular/core';
// @ts-ignore
import projects from 'src/assets/data/portfolio.json';
import {Project} from '../../model/project';
import {MatChip, MatChipEvent, MatChipList, MatChipSelectionChange} from '@angular/material/chips';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = projects;
  selectedTag: string;

  constructor() {
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
      return project.tags.includes(this.selectedTag)
    }
    return true;
  }

}
