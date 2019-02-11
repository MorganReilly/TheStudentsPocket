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

    // More requests to be added.

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
    registerStudent(student_id: String, student_firstName: String, student_lastName: String, student_pin: String): Observable<any> {
       // Setting values from form to a student object to be sent in the body of a url post request:
        const student: Student = {
            student_id: student_id,
            student_firstName: student_firstName,
            student_lastName: student_lastName,
            student_pin: student_pin
        };
        console.log('Inside API: ' + student_id, student_firstName, student_lastName, student_pin);
        // POST data to backend handle:
        return this.http.post('http://localhost:8081/api/students', student);
    }// End add student
}// End class
