import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ApiService} from '../services/api.service';

@Component({
    selector: 'app-edit-subject',
    templateUrl: './edit-subject.component.html',
    styleUrls: ['./edit-subject.component.scss']
})
export class EditSubjectComponent implements OnInit {

    subject: any = [];

    constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) {
    }

    /**
     * @title Edit Subject
     * @desc Function used edit a selected subject record.
     * Used imports:
     *      - import { NgForm }
     */
    onEditSubject(form: NgForm) {
        this.api.editSubject(this.subject[0].id, form.value.subject_name, form.value.subject_desc).subscribe(() => {
            this.router.navigate(['/subject-overview']); // Return the home
        });
    }// End edit post

    ngOnInit() {
        this.api.getSubject(this.route.snapshot.params['id']).subscribe(data => {
            console.log(data);
            this.subject = data; // API JSON data received from the server passed into tasks array
        });
    }// End ngOnInit
}// End class
