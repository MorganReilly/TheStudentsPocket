import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

/* @title AuthService Class
 * @desc allows data to be passed to and from the backend where routes to databases are.
 */

interface authData {
    success: boolean;
    message: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private loggedInStatus = false; // Default set to false.

    constructor(private http: HttpClient) {
    }

    // Function to set logged status of a user
    setloggedIn(value: boolean) {
        this.loggedInStatus = value;
    }

    // Function to get logged status of a user
    get isLoggedIn() {
        return this.loggedInStatus;
    }

    /**
     * @title Check user details for login.
     * @desc makes a request to the server to check the user details agents the database.
     * @param student_id
     * @param student_pin
     */
    checkUserDetails(student_id, student_pin) {
        console.log(student_pin, student_id);
        return this.http.post<authData>('http://localhost:8081/api/auth', {
            student_id,
            student_pin
        }, {withCredentials: true});
    }// End function
}
