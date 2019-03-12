import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
    selector: 'app-grades',
    templateUrl: './grades.page.html',
    styleUrls: ['./grades.page.scss'],
})
export class GradesPage implements OnInit {

    // Variables
    grades: any = [];

    constructor(private api: ApiService) {
    }

    ngOnInit() {
        // Used for retrieving basic grade info
        this.api.getAllGradeInfo().subscribe(data => {
            this.grades = data;
            console.log(data);
        });
    }

}
