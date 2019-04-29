import {Component} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    // Array with user details
    student: any = [];

    constructor(private api: ApiService, private router: Router) {

    }

    /**
     * @title Function for logout
     * @desc makes a request to the api.logout function, if success the application with navigate to the login page
     */
    onLogout() {
        this.api.logout().subscribe(data => {
            if (data) {
                this.router.navigate(['/login']);
            } else {
                alert('Request could not complete');
            }// End if else
        });
    }// End logout function

    ngOnInit() {
        this.api.getStudentDetails().subscribe(data => {
            this.student = data;
        });
    }
}// End class
