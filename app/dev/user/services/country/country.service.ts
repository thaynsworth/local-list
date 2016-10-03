import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Country } from "./country";

@Injectable()
export class CountryService {
    private countriesUrl = '/api/countries';

    constructor(private http: Http) { }

    getCountries() {
        return this.http.get(this.countriesUrl)
            .map( (responseData) => {
                return responseData.json();
            }).catch(this.handleError)
            .map((countries: Array<any>) => {
                let result: Array<Country> = [];
                if (countries) {
                    countries.forEach((country) => {
                        result.push(
                            new Country(country.value, country.name, country.tld));
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