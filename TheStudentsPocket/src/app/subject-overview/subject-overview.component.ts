import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
    selector: 'app-subject-overview',
    templateUrl: './subject-overview.component.html',
    styleUrls: ['./subject-overview.component.scss']
})
export class SubjectOverviewComponent implements OnInit {

    // Variables
    modules: any = [];

    constructor(private api: ApiService) {

    }

    // TO-DO Complete this delete function working on sub documents
    onDelete(id: string) {
        console.log('Deleted Subject' + id);
        this.api.deleteSubject(id).subscribe(() => {
            this.ngOnInit(); // Refresh the page
        });
    } // End delete function

    ngOnInit() {
        this.api.getAllModules().subscribe(data => {
            this.modules = data;
            console.log(data);
        });
    }// End function
}// End class
