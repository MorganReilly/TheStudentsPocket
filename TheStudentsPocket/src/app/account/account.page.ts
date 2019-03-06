import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.page.html',
    styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

    // Array with user details
    student: any = [];

    constructor(private api: ApiService) {
    }

    ngOnInit() {
        this.api.getStudentDetails().subscribe(data => {
            this.student = data;
            console.log(data);
        });
    }
}
