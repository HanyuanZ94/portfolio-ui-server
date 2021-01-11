import {AfterViewInit, Component} from '@angular/core';
import {HostListener} from '@angular/core';
import {Constants} from '../constants/constants';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements AfterViewInit {
  // @ViewChild('about', {static: false}) aboutElement: ElementRef;
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

  public aboutOffset: number = null;
  public portfolioOffset: number = null;
  public workExperienceOffset: number = null;
  public contactOffset: number = null;

  constructor() {
  }

  ngAfterViewInit() {
    this.aboutOffset = document.getElementById('about').offsetTop;
    this.portfolioOffset = document.getElementById('portfolio').offsetTop;
    this.workExperienceOffset = document.getElementById('work experience').offsetTop;
    this.contactOffset = document.getElementById('contact').offsetTop;
  }

  @HostListener('window:scroll')
  checkOffsetTop() {
    this.onWindowScroll();
    if (window.pageYOffset >= this.aboutOffset && window.pageYOffset < this.portfolioOffset - Constants.OFFSET_MARGIN) {
      this.activeLink = this.links[0];
    } else if (window.pageYOffset >= this.portfolioOffset - Constants.OFFSET_MARGIN && window.pageYOffset < this.workExperienceOffset - Constants.OFFSET_MARGIN) {
      this.activeLink = this.links[1];
    } else if (window.pageYOffset >= this.workExperienceOffset - Constants.OFFSET_MARGIN && window.pageYOffset < this.contactOffset - Constants.LARGE_OFFSET_MARGIN) {
      this.activeLink = this.links[2];
    } else if (window.pageYOffset >= this.contactOffset - Constants.LARGE_OFFSET_MARGIN) {
      this.activeLink = this.links[3];
    } else {
      this.activeLink = this.links[0];
    }
  }

  onWindowScroll() {
    const navBar = document.querySelector('#navbar');
    if (window.pageYOffset > document.body.offsetHeight) {
      navBar.classList.add('sticky');
    } else {
      navBar.classList.remove('sticky');
    }
  }

  scroll(sectionId: string) {
    document.getElementById(sectionId).scrollIntoView({behavior: 'smooth'});
  }
}
