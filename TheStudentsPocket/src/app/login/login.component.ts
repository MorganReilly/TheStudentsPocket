import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private auth: AuthService, private router: Router) {
    }

    // Login function that makes a call to auth.service to check if the user exists in the database.
    login(form: NgForm) {
        this.auth.checkUserDetails(form.value.student_id, form.value.pin).subscribe(data => {
            if (data.success) { // If true navigate to home page.
                this.router.navigate(['/home']);
                this.auth.setloggedIn(true); // Set client side logged in status to true.
                    console.log('Success'); // Log success to console.
            } else {
                // Display error if request comes back false:
                window.alert('Not the correct information');
            }
        });
    }

    ngOnInit() {
    }

}
