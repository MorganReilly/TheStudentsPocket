import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../services/api.service';

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

    ngOnInit() {
    }

    /**
     * @title Error message handle
     * @desc Functions are used to set and get error message for this component.
     */
    setErrorMessage(error: String) {
        this.errorMessage = error;
    }

    /**
     * @title Edit Grade
     * @desc Function used to edit a selected grade record.
     * Used imports:
     *      - import { NgForm }
     */
    /*
    onEditGrade(form: NgForm){
        this.api.edit
    }
    */

}
