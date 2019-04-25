import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    private errorMessage;

    constructor(private auth: AuthService, private router: Router) {
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

    // Login function that makes a call to auth.service to check if the user exists in the database.
    login(form: NgForm) {
        this.auth.checkUserDetails(form.value.student_id, form.value.pin).subscribe(data => {
            console.log(data);
            if (data.success) { // If true navigate to home page.
                this.router.navigate(['/home']);
                this.auth.setloggedIn(true); // Set client side logged in status to true.
                console.log('Success'); // Log success to console.
            } else {
                // Display error if request comes back false:
                this.setErrorMessage('Not the correct information');
            }// end if else
        });
    }// End login function

    ngOnInit() {
    }

}// End class
