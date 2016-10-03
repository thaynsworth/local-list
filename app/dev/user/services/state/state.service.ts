import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { State } from './state';

@Injectable()
export class StateService {
    stateUrl: string;

    constructor(private http: Http) { }

    getStates(country: string) {
        this.stateUrl = `/api/countries/${country}/states`;
        return this.http.get(this.stateUrl)
            .map( (responseData) => {
                return responseData.json();
            }).catch(this.handleError)
            .map((states: Array<any>) => {
                let result: Array<State> = [];
                if (states) {
                    states.forEach((state) => {
                        result.push(
                            new State(state.name, state.code));
                    });
                }
                return result;
            }).catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}