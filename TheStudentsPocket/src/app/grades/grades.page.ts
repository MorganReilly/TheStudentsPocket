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

    // Delete subject by its id number
    onDelete(id: number) {
        console.log('Deleted Grade' + id);
        this.api.deleteGrade(id).subscribe(() => {
            this.ngOnInit(); // Refresh the page once update to records is complete
        });
    } // End delete function

    ngOnInit() {
        // Used for retrieving basic grade info
        this.api.getAllGradeInfo().subscribe(data => {
            this.grades = data;
            console.log(data);
        });
    }

}
