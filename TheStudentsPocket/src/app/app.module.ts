import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './services/api.service';
import {SubjectOverviewComponent} from './subject-overview/subject-overview.component';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {CreateSubjectComponent} from './create-subject/create-subject.component';
import {RouteReuseStrategy} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TimetableComponent } from './timetable/timetable.component';

import {
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule
} from '@angular/material';
import { EditSubjectComponent } from './edit-subject/edit-subject.component';
import { GradesComponent } from './grades/grades.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        SubjectOverviewComponent,
        CreateSubjectComponent,
        TimetableComponent,
        EditSubjectComponent,
        GradesComponent
    ],
    /* Because MatDialog instantiates components at run-time, the Angular compiler
    * needs extra information to create the necessary ComponentFactory for your dialog
    * content component.
    */
    entryComponents: [CreateSubjectComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        MatDialogModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatExpansionModule,
        MatSidenavModule,
        MatDividerModule,
        MatListModule,
        MatFormFieldModule,
        MatDialogModule,
        MatRadioModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatGridListModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        ApiService,
        CreateSubjectComponent,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
