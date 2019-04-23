import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
        path: 'login',
        loadChildren: './login/login.module#LoginPageModule'
    },
    {
        path: 'subject-overview',
        loadChildren: './subject-overview/subject-overview.module#SubjectOverviewPageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'grades',
        loadChildren: './grades/grades.module#GradesPageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'edit-subject/:id',
        loadChildren: './edit-subject/edit-subject.module#EditSubjectPageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'create-subject',
        loadChildren: './create-subject/create-subject.module#CreateSubjectPageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'timetable',
        loadChildren: './timetable/timetable.module#TimetablePageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'register',
        loadChildren: './register/register.module#RegisterPageModule'
    },
    {
        path: 'account',
        loadChildren: './account/account.module#AccountPageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'edit-grade/:id',
        loadChildren: './edit-grade/edit-grade.module#EditGradePageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'create-grade',
        loadChildren: './create-grade/create-grade.module#CreateGradePageModule',
        canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
