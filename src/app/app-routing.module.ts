import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, ParamMap } from '@angular/router';

import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  {path: 'homePage-Component', component: HomePageComponent},
  {path: '', redirectTo: '/homePage-Component', pathMatch: 'full'},
  {path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
