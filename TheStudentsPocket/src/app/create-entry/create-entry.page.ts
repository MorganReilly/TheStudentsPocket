import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-create-entry',
    templateUrl: './create-entry.page.html',
    styleUrls: ['./create-entry.page.scss'],
})
export class CreateEntryPage implements OnInit {

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


    addEntry(form: NgForm) {
        this.api.addEntry(form.value.subject_name, form.value.subject_room, form.value.subject_day, form.value.subject_period).subscribe(data => {
            if (data.status) {
                this.router.navigate(['/timetable']);
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
