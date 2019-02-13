import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import {RegisterComponent} from './register/register.component';
=======
import {ignore} from 'selenium-webdriver/testing';
import {SubjectOverviewComponent} from './subject-overview/subject-overview.component';
import {CreateModuleinfoPageComponent} from './create-moduleinfo-page/create-moduleinfo-page.component';
>>>>>>> frontend

// @ts-ignore
// @ts-ignore
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
<<<<<<< HEAD
  { // JUST FOR TESTING PURPOSES ONLY!
    path: 'register',
    component: RegisterComponent
=======
  {
    path: 'subject-overview',
    component: SubjectOverviewComponent
  },
  {
    path: 'create-moduleinfo',
    component: CreateModuleinfoPageComponent
>>>>>>> frontend
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
