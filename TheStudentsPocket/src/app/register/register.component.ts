import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../services/api.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    regUser: any = [];

    constructor(private api: ApiService) {
    }

    /**
     * @title Registers a new student into the database
     * @desc this function allows the user to register an account with on the database.
     * This will allow the user access his/her records upon login.
     * */
    registerUser(form: NgForm) {
        // VALIDATION TO BE BE IMPLEMENTED

        // Push data to api => to be pushed to database.
        this.api.registerStudent(form.value.idNum, form.value.firstName, form.value.lastName, form.value.pinNum).subscribe(() => {

        });

    }// End register user function

    ngOnInit() {
    }

}// End class
