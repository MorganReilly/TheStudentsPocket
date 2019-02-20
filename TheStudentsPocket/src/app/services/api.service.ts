import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../student.model';
import {Subject} from '../subject.model';

/* @title API Class
 * @desc allows data to be passed to and from the backend where routes to databases are.
 */

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    // Array of student data
    private students: Student[] = [];
    private student_id = 'G00346889';

    constructor(private http: HttpClient) {
    }

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
    registerStudent(student_id: String, student_first_name: String, student_last_name: String, student_pin: Number): Observable<any> {
        // Setting values from form to a student object to be sent in the body of a url post request:
        const student: Student = {
            student_id: student_id,
            student_first_name: student_first_name,
            student_last_name: student_last_name,
            student_pin: student_pin
        };
        console.log('Inside API: ', student);
        // POST data to backend handle:
        return this.http.post('http://localhost:8081/api/students', student);
    }// End add student

    /**
     * @title Adds a subject to a students document in the database
     * @desc updates a students records in the database with a subject they added in the UI.
     * @param subject_name subject_desc.
     * @param subject_name
     * @param subject_desc
     * @Note student ID must be passed in the URL followed by the subject object in the body of the request.
     */
    addSubject(subject_name: String, subject_desc: String): Observable<any> {
        const subject: Subject = {
            student_id: this.student_id,
            subject_name: subject_name,
            subject_desc: subject_desc
        };
        // Log message to server console:
        console.log('Inside API: ' +  subject);

        // PUT REQUEST to server:
        // this.student_id hardcoded for testing only...
        return this.http.put('http://localhost:8081/api/students/subjects', subject);
    }// End addSubject function

    /**
     * @title Gets all modules.
     * @desc gets all the modules a student has entered into there account.
     * @Note student ID must be passed in the URL followed by the subject object in the body of the request.
     */
    getAllModules(): Observable<any> {
        return this.http.get('http://localhost:8081/api/students/subjects/' + this.student_id);
    }// End getAllModules function

    /**
     * @title Deletes a subject
     * @desc deletes a selected subject from the database.
     * @note passes String, Server takes care of the request.
     * Pass Student ID as first param and then the subject id as the second param.
     */
    deleteSubject(id: number): Observable<any> {
        return this.http.delete('http://localhost:8081/api/students/subjects/' + id);
    }
}// End class
