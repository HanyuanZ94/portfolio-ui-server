import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  links = [
    {
      name: 'home',
      link: '/homePage'
    },
    {
      name: 'about',
      link: '/homePage'
    },
    {
      name: 'portfolio',
      link: '/portfolio'
    },
    {
      name: 'contact',
      link: '/contact'
    }];
  activeLink = this.links[0];

  constructor() {
  }

  ngOnInit(): void {
  }

}
