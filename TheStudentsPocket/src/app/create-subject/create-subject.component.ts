import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from '../services/api.service';
import {MatDialog} from '@angular/material';


@Component({
    selector: 'app-create-moduleinfo-page',
    templateUrl: './create-subject.component.html',
    styleUrls: ['./create-subject.component.scss']
})
export class CreateSubjectComponent implements OnInit {

    constructor(private api: ApiService, public dialog: MatDialog) {
    }

    /**
     * @title Open Create subject CreateComponent dialog
     * @desc Function used to open up a popout dialog box to display the create form from create.component
     * Used imports:
     *      - import { MatDialog }
     *      - import { CreateSubjectComponent }
     */
    openDialog() {
        const dialogRef = this.dialog.open(CreateSubjectComponent); // Display CreateComponent inside dialog box.

        dialogRef.afterClosed().subscribe(result => { // Close and log the results
            console.log(`Dialog result: ${result}`);
        });
    }// End function

    /**
     * @title Close Create task CreateComponent dialog
     * @desc Function used to close popout dialog box that display the create form from CreateSubjectComponent
     * Used imports:
     *      - import { MatDialog }
     *      - import { CreateComonent }
     */
    closeDialog() {
        this.dialog.closeAll();
    }// End closeDialog function for add task

    addSubject(form: NgForm) {
        this.api.addSubject(form.value.module_name, form.value.module_desc).subscribe(() => {
            location.reload(true); // Reload the page
        });
        // Display form values to console
        console.log(form.value);
        form.resetForm();
        this.closeDialog();
    }// End addSubject function

    ngOnInit() {
    }

}// End class


