import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-portfolio';
  // @ViewChild('about') aboutElement;
  // @ViewChild('about') aboutComponent: ComponentRef<AboutComponent>;

  // public aboutOffset: number = null;
  //
  // ngAfterViewInit() {
  //   this.aboutOffset = this.aboutElement.nativeElement.getBoundingClientRect().top;
  //   if (this.aboutOffset == null) {
  //     this.aboutOffset = this.aboutComponent.location.nativeElement.offetTop;
  //   }
  // }
  //
  // @HostListener('window:scroll', ['$event'])
  // checkOffsetTop() {
  //
  //   if (this.aboutOffset !== null && window.pageYOffset >= this.aboutOffset) {
  //    console.log('success' + this.aboutOffset);
  //   }
  // }
}
