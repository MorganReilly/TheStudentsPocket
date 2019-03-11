import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../student.model';
import {Subject} from '../subject.model';

/* @title APIService Class
 * @desc allows data to be passed to and from the backend where routes to databases are.
 */

// Interface used for isLoggedIn requests.
interface isLoggedIn {
    status: boolean;
}

interface isLogout {
    status: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    // Variables
    // Server URL:
    serverURL = 'http://ec2-34-240-242-186.eu-west-1.compute.amazonaws.com:8081';

    constructor(private http: HttpClient) {

    }

    // Function to check if the user has a logged in session:
    isLoggedIn(): Observable<isLoggedIn> {
        console.log('IS LOGGED IN REQUEST SENT TO SERVER!');
        return this.http.get<isLoggedIn>(this.serverURL + '/api/auth', {withCredentials: true});
    }// End isLoggedIn function

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
        return this.http.post(this.serverURL + '/api/students', student);
    }// End add student

    /**
     * @title Adds a subject to a students document in the database
     * @desc updates a students records in the database with a subject they added in the UI.
     * @param subject_name
     * @param subject_desc
     */
    addSubject(subject_name: String, subject_desc: String): Observable<any> {
        const subject: Subject = {
            subject_name: subject_name,
            subject_desc: subject_desc
        };
        // Log message to server console:
        console.log('Inside API: ' + subject);

        // PUT REQUEST to server:
        return this.http.post(this.serverURL + '/api/students/subjects', subject);
    }// End addSubject function

    /**
     * @title Gets all modules.
     * @desc gets all the modules a student has entered into there account.
     */
    getAllSubjects(): Observable<any> {
        return this.http.get(this.serverURL + '/api/students/subjects/');
    }// End getAllSubjects function

    /**
     * @title Deletes a subject
     * @desc deletes a selected subject from the database.
     * @note passes String, Server takes care of the request.
     */
    deleteSubject(id: number): Observable<any> {
        return this.http.delete(this.serverURL + '/api/students/subjects/' + id);
    }// end delete subject function

    /**
     * @title GET a subject
     * @desc gets one subject from a students records by id of the subject
     * @param id.
     */
    getSubject(id: number): Observable<any> {
        return this.http.get(this.serverURL + '/api/students/subjects/subject/' + id);
    }// End get subject function

    /**
     * @title EDIT a subject
     * @desc updates a subjects records by the subject id.
     * @param id
     * @param subject_name
     * @param subject_desc
     */
    editSubject(id: number, subject_name: String, subject_desc: String): Observable<any> {
        const subject: Subject = {
            subject_name: subject_name,
            subject_desc: subject_desc
        };
        return this.http.put(this.serverURL + '/api/students/subjects/subject/' + id, subject);
    }// End edit subject function

    getStudentDetails(): Observable<any> {
        return this.http.get(this.serverURL + '/api/students/student');
    }

    logout(): Observable<isLogout> {
        return this.http.get<isLogout>(this.serverURL + '/api/logout', {withCredentials: true});
    }
}// End class
