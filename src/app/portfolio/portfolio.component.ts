import {Component, OnInit} from '@angular/core';
// @ts-ignore
import projects from 'src/assets/data/portfolio.json';
import {Project} from '../../model/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = projects;
  constructor() {
  }

  ngOnInit(): void {
    console.log(this.projects[0].name);
  }

}
