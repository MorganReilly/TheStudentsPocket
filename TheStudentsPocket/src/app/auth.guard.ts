import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './services/auth.service';
import {ApiService} from './services/api.service';
import {map} from 'rxjs/operators';

/* @title Authentication guard.
 * @note this class adds authentication to the application. Unless a user is logged in and authenticated by the server they can not use
 * some parts of the application. Only login & registration pages are available unauthenticated users.
 * Every time a page is loaded a request is made  to the server to check for a active session.
 */

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router, private api: ApiService) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        // Make a request to api class to make a request to server to check is the user logged in.
        return this.api.isLoggedIn().pipe(map(res => {
            console.log(res.status); // Log response
            if (res.status) { // If user is logged in setLogegdIn = true and return true.
                this.auth.setloggedIn(true);
                return true;
            } else { // Else navigate to login page.
                this.router.navigate(['/login']);
                return false;
            }
        }));
    }
}
