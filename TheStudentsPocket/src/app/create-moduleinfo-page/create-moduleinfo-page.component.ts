import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../services/api.service';

@Component({
    selector: 'app-create-moduleinfo-page',
    templateUrl: './create-moduleinfo-page.component.html',
    styleUrls: ['./create-moduleinfo-page.component.scss']
})
export class CreateModuleinfoPageComponent implements OnInit {

    constructor(private api: ApiService) {
    }

    ngOnInit() {
    }

    addSubject(form: NgForm) {
        this.api.addSubject(form.value.module_name, form.value.module_desc).subscribe(() => {

        });
        // Display form values to console
        console.log(form.value);
        form.resetForm();
    }// End addSubject function
}// End class
