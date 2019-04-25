import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Timetable',
            url: '/timetable',
            icon: 'clock'
        },
        {
            title: 'Grade Overview',
            url: '/grades',
            icon: 'list'
        },
        {
            title: 'Module Overview',
            url: '/subject-overview',
            icon: 'list'
        },
        {
            title: 'Grade Creation',
            url: '/create-grade',
            icon: 'create'
        },
        {
            title: 'Module Creation',
            url: '/create-subject',
            icon: 'create'
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
