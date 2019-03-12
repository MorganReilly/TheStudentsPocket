import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../services/api.service';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create-subject',
    templateUrl: './create-subject.page.html',
    styleUrls: ['./create-subject.page.scss'],
})
export class CreateSubjectPage implements OnInit {

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

    /**
     * @title Open Create subject CreateComponent dialog
     * @desc Function used to open up a popout dialog box to display the create form from create.component
     * Used imports:
     *      - import { MatDialog }
     *      - import { CreateSubjectPage }
     */
    openDialog() {
        const dialogRef = this.dialog.open(CreateSubjectPage); // Display CreateComponent inside dialog box.

        dialogRef.afterClosed().subscribe(result => { // Close and log the results
            console.log(`Dialog result: ${result}`);
        });
    }// End function

    /**
     * @title Close Create Subject dialog
     * @desc Function used to close popout dialog box that display the create form from CreateSubjectComponent
     * Used imports:
     *      - import { MatDialog }
     *      - import { CreateSubject }
     */
    closeDialog() {
        this.dialog.closeAll();
    }// End closeDialog function for add task

    addSubject(form: NgForm) {
        this.api.addSubject(form.value.module_name, form.value.module_desc).subscribe(data => {
            if (data.status) {
                this.router.navigate(['/subject-overview']);
            } else if (data.errorCode === 'ER_DUP_ENTRY') {
                this.setErrorMessage('This subject already exists in your records');
            } else {
                this.setErrorMessage(data.message);
            }// end if else
        });
        // Display form values to console
        console.log(form.value);
        form.resetForm();
        this.closeDialog();
    }// End addSubject function

    ngOnInit() {
    }

}// End class
