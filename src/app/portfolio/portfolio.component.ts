import {Component, OnInit} from '@angular/core';
import * as portfolio from 'src/data/portfolio.json';
import {Project} from '../../model/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = portfolio;
  constructor() {
  }

  ngOnInit(): void {
    console.log(this.projects);
  }

}
