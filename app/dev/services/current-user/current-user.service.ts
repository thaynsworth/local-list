import { Injectable } from "@angular/core";
import { Observable }     from 'rxjs/Observable';
import { Http } from "@angular/http";

@Injectable()
export class CurrentUserService {
    private whoami = '/api/cms/whoami';

    constructor(private http: Http) { }

    getCurrentUser(shortName?: string) {
        if (shortName) {
            this.whoami = this.whoami + '?organization=' + shortName;
        }

        return this.http.get(this.whoami)
            .map( (responseData) => {
                return responseData.json();
            }).catch(this.handleError)
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}