import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Password } from "./password";

@Injectable()
export class PasswordService {
    userPasswordUrl: string = '/api/users/me/password';

    constructor(private http: Http) {}

    put(password: Password) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = this.userPasswordUrl;
        return this.http
            .put(url, JSON.stringify(password), {headers: headers})
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