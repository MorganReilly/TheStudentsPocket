import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ignore} from 'selenium-webdriver/testing';
import {SubjectOverviewComponent} from './subject-overview/subject-overview.component';
import {CreateModuleinfoPageComponent} from './create-moduleinfo/create-moduleinfo-page.component';

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
  {
    path: 'subject-overview',
    component: SubjectOverviewComponent
  },
  {
    path: 'create-moduleinfo',
    component: CreateModuleinfoPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
