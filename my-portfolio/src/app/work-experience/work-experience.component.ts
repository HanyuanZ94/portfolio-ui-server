import { Component, OnInit } from '@angular/core';
import experiences from 'src/assets/data/experiences.json';
import {Experience} from '../../model/experience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  experiences: Experience[] = experiences;
  constructor() { }

  ngOnInit(): void {
  }

}
