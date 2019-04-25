import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import set = Reflect.set;
import {not} from 'rxjs/internal-compatibility';

@Component({
    selector: 'app-timetable',
    templateUrl: './timetable.page.html',
    styleUrls: ['./timetable.page.scss'],
})
export class TimetablePage implements OnInit {

    // Variables
    periods: Map<string, any>;

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
        /*
        this.api.getAllTimetableEntrys().subscribe(data => {
                this.timetableEntrys = data;
                console.log(data);

            const periods = new Map<string, any>();
            new Set(data.map(period => period['subject_day'])).forEach(function(day: string) {
                periods[day] = data.filter(function (p) { return p['subject_day'] === day; });
            });
            this.periods = periods;
            console.log(this.periods);

            }

        );
        */
    }

}
