import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

// interface myData {
    // success: boolean;
    // message: string;
// }

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    getUserDetails(student_id, student_pin): Observable<any> {
        console.log(student_pin, student_id);
        return this.http.post('http://localhost:8081/api/auth', {
            student_id,
            student_pin
        });
    }// End function
}
