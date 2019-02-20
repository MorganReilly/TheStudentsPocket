import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private auth: AuthService) {
    }

    login(event) {
        event.preventDefault();
        const target = event.target;
        const student_id = target.querySelector('#student_id').value;
        const student_pin = target.querySelector('#pin').value;
        console.log(event);

        this.auth.getUserDetails(student_id, student_pin).subscribe(data => {
            // if (data.success) {
            //     console.log('Success');
            // } else {
            //     window.alert('Not the correct information');
            // }
        });
    }

    ngOnInit() {
    }

}
