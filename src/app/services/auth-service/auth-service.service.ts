import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { User } from './user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: User;
    //public currentUser: Observable<User>;
    currentUser: User;

    constructor(
        private http: HttpClient,
        private router: Router
    ) {
        this.currentUserSubject = JSON.parse(localStorage.getItem('currentUser'));
        //this.currentUser = this.currentUserSubject.asObservable();
        this.currentUser = null;
    }

    public get currentUserValue(): User {
        return this.currentUserSubject;
    }

    login(username: string, password: string) {
        /*
        return this.http.post<any>(`/users/authenticate`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
        */
       if (username === 'admin' && password === 'memorium02') {
        this.currentUser = {
            username,
            password,
            id: 1,
            firstName: 'string',
            lastName: 'string',
            token: 'string',
        };
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        this.currentUserSubject = this.currentUser;
        return true;
       } else {
        return false;
       }
    }

    logout() {
        // remove user from local storage to log user out
        //localStorage.removeItem('currentUser');
        //this.currentUserSubject.next(null);
        localStorage.removeItem('currentUser');
        this.currentUser = null;
        this.currentUserSubject = null;
        this.router.navigate(['/login']);

    }
}