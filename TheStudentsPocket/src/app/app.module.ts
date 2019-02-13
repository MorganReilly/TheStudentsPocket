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
import {CreateModuleinfoPageComponent} from './create-moduleinfo-page/create-moduleinfo-page.component';
import {RouteReuseStrategy} from '@angular/router';

@NgModule({
    declarations: [AppComponent, LoginComponent, RegisterComponent, SubjectOverviewComponent, CreateModuleinfoPageComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        ApiService,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
