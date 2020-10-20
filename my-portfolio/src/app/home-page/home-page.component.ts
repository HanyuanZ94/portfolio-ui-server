import {Component, OnInit} from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  links = [
    {
      name: 'about'
    },
    {
      name: 'portfolio'
    },
    {
      name: 'work experience'
    },
    {
      name: 'contact'
    }];
  activeLink = this.links[0];

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let element = document.querySelector('#navbar');
    if (window.pageYOffset > document.body.offsetHeight) {
      element.classList.add('sticky');
    } else {
      element.classList.remove('sticky');
    }
  }
}
