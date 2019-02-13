import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

<<<<<<< HEAD
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Import for HTTP requests
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './services/api.service';

@NgModule({
    declarations: [AppComponent, LoginComponent, RegisterComponent],
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
=======
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SubjectOverviewComponent } from './subject-overview/subject-overview.component';
import { CreateModuleinfoPageComponent } from './create-moduleinfo-page/create-moduleinfo-page.component';

@NgModule({
  declarations: [AppComponent, SubjectOverviewComponent, CreateModuleinfoPageComponent],
  entryComponents: [],
  imports: [
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
>>>>>>> frontend
})
export class AppModule {
}
