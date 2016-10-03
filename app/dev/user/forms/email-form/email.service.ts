import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Email } from "./email";

@Injectable()
export class EmailService {
    userEmailUrl: string = '/api/users/me/email';

    constructor(private http: Http) {}

    getUserEmail(): Observable<Email> {
        return this.http.get(this.userEmailUrl)
            .map((responseData) => {
                return responseData.json();
            })
            .catch(this.handleError);
    }

    put(email: Email) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = this.userEmailUrl;
        return this.http
            .put(url, JSON.stringify(email), {headers: headers})
            .map((responseData) => {
                return responseData.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}