import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Information } from "./information";

@Injectable()
export class InformationService {
    userUrl: string = '/api/users/me';

    constructor(private http: Http) { }

    getUserAccount(): Observable<Information> {
        return this.http.get(this.userUrl)
            .map((responseData) => {
                return responseData.json();
            })
            .catch(this.handleError);
    }

    put(user: Information) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.userUrl}/account`;
        return this.http
            .put(url, JSON.stringify(user), {headers: headers})
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