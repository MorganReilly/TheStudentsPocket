import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {CreateSubjectComponent} from '../create-subject/create-subject.component';

@Component({
    selector: 'app-subject-overview',
    templateUrl: './subject-overview.component.html',
    styleUrls: ['./subject-overview.component.scss']
})
export class SubjectOverviewComponent implements OnInit {

    // Variables
    modules: any = [];

    constructor(private api: ApiService, private createCon: CreateSubjectComponent) {
    }

    // Function to open create a subject disalog box
    openDialog() {
        this.createCon.openDialog();
    }

   // Delete subject by its id number
    onDelete(id: number) {
        console.log('Deleted Subject' + id);
        this.api.deleteSubject(id).subscribe(() => {
            this.ngOnInit(); // Refresh the page once update to records is complete
        });
    } // End delete function

    ngOnInit() {
        this.api.getAllModules().subscribe(data => {
            this.modules = data;
            console.log(data);
        });
    }// End function
}// End class
