import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../services/api.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-edit-subject',
    templateUrl: './edit-subject.page.html',
    styleUrls: ['./edit-subject.page.scss'],
})
export class EditSubjectPage implements OnInit {

    // Variables
    subject: any = [];
    private errorMessage;

    constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) {
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
     * @title Edit Subject
     * @desc Function used edit a selected subject record.
     * Used imports:
     *      - import { NgForm }
     */
    onEditSubject(form: NgForm) {
        this.api.editSubject(this.subject[0].id, form.value.subject_name, form.value.subject_desc).subscribe(data => {
            if (data.status) {
                this.router.navigate(['/subject-overview']); // Return the home
            } else if (data.errorCode === 'ER_DUP_ENTRY') {
                this.setErrorMessage('This subject already exists in your records');
            } else {
                this.setErrorMessage(data.message);
            }// end if else
        });
    }// End edit post

    ngOnInit() {
        this.api.getSubject(this.route.snapshot.params['id']).subscribe(data => {
            console.log(data);
            this.subject = data; // API JSON data received from the server passed into tasks array
        });
    }// End ngOnInit
}// End class
