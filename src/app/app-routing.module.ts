import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, ParamMap } from '@angular/router';

import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  {path: 'homePage', component: HomePageComponent},
  {path: '', redirectTo: '/homePage', pathMatch: 'full'},
  {path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
