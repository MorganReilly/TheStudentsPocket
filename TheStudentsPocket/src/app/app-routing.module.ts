import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {SubjectOverviewComponent} from './subject-overview/subject-overview.component';
import {CreateSubjectComponent} from './create-subject/create-subject.component';
import {TimetableComponent} from './timetable/timetable.component';
import {EditSubjectComponent} from './edit-subject/edit-subject.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
        canActivate: [AuthGuard] // Authentication protection
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule',
        canActivate: [AuthGuard]
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
        component: SubjectOverviewComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'create-moduleinfo',
        component: CreateSubjectComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'timetable',
        component: TimetableComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'edit-subject/:id',
        component: EditSubjectComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
