import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    private errorMessage;

    constructor(private api: ApiService, private router: Router) {
    }

    /**
     * @title Error message handle
     * @desc Functions are used to set and get error message for this component.
     */
    setErrorMessage(error: String) {
        this.errorMessage = error;
    }

    getErrorMessage() {
        return this.errorMessage;
    }
    // End ======================================================================

    /**
     * @title Registers a new student into the database
     * @desc this function allows the user to register an account with on the database.
     * This will allow the user access his/her records upon login.
     * */
    registerUser(form: NgForm) {
        // TO-DO Validation to be added
        // Push data to api => to be pushed to database.
        this.api.registerStudent(form.value.idNum, form.value.firstName, form.value.lastName, form.value.pin).subscribe(data => {
            if (data.status) {
                // user registered, now run login page.
                this.router.navigate(['/login']);
            } else if (data.errorCode === 'ER_DUP_ENTRY') {
                this.setErrorMessage('This Student ID number already exists in the databases, please try another one');
            } else {
                this.setErrorMessage(data.message);
            }// end if else
        });
        console.log(form.value);
        form.resetForm(); // Reset the form
    }// End register user function

    ngOnInit(): void {
    }
}// End class
