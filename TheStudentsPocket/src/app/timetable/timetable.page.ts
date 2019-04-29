import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
    selector: 'app-timetable',
    templateUrl: './timetable.page.html',
    styleUrls: ['./timetable.page.scss'],
})
export class TimetablePage implements OnInit {

    // Variables
    timetableEntrys: any = [];

    constructor(private api: ApiService) {
    }

    // Delete timetable entry by its id number
    onDelete(id: number) {
        console.log('Deleted Entry' + id);
        this.api.deleteEntry(id).subscribe(() => {
            this.ngOnInit(); // Refresh the page once update to records is complete
        });
    } // End delete function

    ngOnInit() {
        this.api.getAllTimetableEntrys().subscribe(data => {
            this.timetableEntrys = data;
        });

    }


}
