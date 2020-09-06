import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactComponent,
    PortfolioComponent,
    WorkExperienceComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        RouterModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatTabsModule,
        MatChipsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
