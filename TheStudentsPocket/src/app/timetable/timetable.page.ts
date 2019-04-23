import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.page.html',
  styleUrls: ['./timetable.page.scss'],
})
export class TimetablePage implements OnInit {

  // Variables
  timetableEntrys: any = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getAllTimetableEntrys().subscribe(data => {
      this.timetableEntrys = data;
      console.log(data);
    });
  }

}
