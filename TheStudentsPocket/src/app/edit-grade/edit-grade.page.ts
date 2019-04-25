import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../services/api.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-edit-grade',
    templateUrl: './edit-grade.page.html',
    styleUrls: ['./edit-grade.page.scss'],
})
export class EditGradePage implements OnInit {

    // Variables
    grades: any = [];
    private errorMessage;

    constructor(private router: Router, private  route: ActivatedRoute, private  api: ApiService) {
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

    /**
     * @title Edit Grade
     * @desc Function used to edit a selected grade record.
     * Used imports:
     *      - import { NgForm }
     */
    onEditGrade(form: NgForm) {
        this.api.editGrade(this.grades[0].id, form.value.subject_name,
            form.value.grade_type, form.value.grade_weight, form.value.curr_grade).subscribe(data => {
            if (data.status) {
                this.router.navigate(['/grades']); // Return the home
            } else if (data.errorCode === 'ER_DUP_ENTRY') {
                this.setErrorMessage('This grade already exists in your records');
            } else {
                this.setErrorMessage(data.message);
            }// end if else
        });
    }// End edit post

    ngOnInit() {
        this.api.getGrade(this.route.snapshot.params['id']).subscribe(data => {
            this.grades = data; // API JSON data received from the server passed into tasks array
        });
    }// End ngOnInit

}
