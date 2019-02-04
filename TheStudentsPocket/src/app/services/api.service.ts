import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../student.model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }
    // Array of student data
    private students: Student[] = [];

    //More requests to be added.

    /**
     * @title Get student data.
     * @desc gets all student data from the database.
     */
    getStudent(): Observable<any> {
        return this.http.get('http://localhost:8081/api/students');
    }// End get student function

    /**
     * @title Adds a student.
     * @desc adds a student from the application.
     */
    addStudent(student_id: String, student_name: String, student_pin: Number): Observable<any> {
        const student: Student = {student_id: student_id, student_name: student_name, student_pin: student_pin};
        return this.http.post('http://localhost:8081/api/students', student);
    }// End add student
}// End class
