import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {SubjectOverviewComponent} from './subject-overview/subject-overview.component';
import {CreateSubjectComponent} from './create-subject/create-subject.component';
import {TimetableComponent} from './timetable/timetable.component';
import {EditSubjectComponent} from './edit-subject/edit-subject.component';
import {LoginComponent} from './login/login.component';

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
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'subject-overview',
        component: SubjectOverviewComponent
    },
    {
        path: 'create-moduleinfo',
        component: CreateSubjectComponent
    },
    {
        path: 'timetable',
        component: TimetableComponent
    },
    {
        path: 'edit-subject/:id',
        component: EditSubjectComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
