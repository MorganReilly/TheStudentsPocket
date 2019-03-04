import { Component, OnInit } from '@angular/core';
import {CreateSubjectPage} from '../create-subject/create-subject.page';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-subject-overview',
  templateUrl: './subject-overview.page.html',
  styleUrls: ['./subject-overview.page.scss'],
})
export class SubjectOverviewPage implements OnInit {

    // Variables
    modules: any = [];

    constructor(private api: ApiService, private createCon: CreateSubjectPage) {
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


