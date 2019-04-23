import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-create-grade',
    templateUrl: './create-grade.page.html',
    styleUrls: ['./create-grade.page.scss'],
})
export class CreateGradePage implements OnInit {

    private errorMessage;

    constructor(private api: ApiService, public dialog: MatDialog, private router: Router) {
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


    addGrade(form: NgForm) {
        this.api.addGrade(form.value.subject_name, form.value.grade_type, form.value.grade_weight, form.value.curr_grade).subscribe(data => {
            if (data.status) {
                this.router.navigate(['/grades']);
            } else if (data.errorCode === 'ER_DUP_ENTRY') {
                this.setErrorMessage('This subject already exists in your records');
            } else {
                this.setErrorMessage(data.message);
            }// end if else
        });
        // Display form values to console
        console.log(form.value);
        form.resetForm();
    }// End addSubject function

    ngOnInit() {
    }

}
