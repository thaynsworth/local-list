import { Component, OnInit } from '@angular/core';

import { Information } from './information';
import { InformationService } from './information.service'
import { Country } from '../../services/country/country';
import { CountryService } from '../../services/country/country.service';
import { State } from '../../services/state/state';
import { StateService } from '../../services/state/state.service';
import { Message } from "../../../common/notification-message/message";

@Component({
    moduleId: module.id,
    selector: 'information-form',
    templateUrl: 'information-form.component.html?v=' + version,
    styleUrls: ['information-form.component.css?v=' + version]
})

export class InformationFormComponent implements OnInit {
    user: Information = <Information> {};
    countries: Array<Country>;
    states: Array<State> = [];
    disabled: boolean;
    readonly: boolean = true;
    notification: Message = <Message> {};
    error: any;

    constructor(private informationService: InformationService, private countryService: CountryService, private stateService: StateService) {}

    getUserAccount(): void {
        this.informationService.getUserAccount()
            .subscribe(
                account => this.user = account,
                error =>  this.error = <any>error
            );
    }

    getCountries() {
        this.countryService.getCountries()
            .subscribe(
                countries => this.countries = countries,
                error =>  this.error = <any>error,
                () => this.getStates(this.user.country, this.user.countryName)
            );
    }

    getStates(value: string, name: string) {
        this.user.countryName = name;
        this.user.country = value;
        this.stateService.getStates(value)
            .subscribe(
                states => this.states = states,
                error =>  this.error = <any>error,
                () => this.checkStateExist()
            );
    }

    selectedState(name: string, code: string) {
        this.user.regionName = name;
        this.user.region = code;
    }

    checkStateExist() {
        this.disabled = !(this.states.length);

        if (this.disabled) {
            this.user.regionName = '';
            this.user.region = '';
        }
    }

    save() {
        this.informationService.put(this.user)
            .subscribe(
                res => this.notification = res,
                error =>  this.error = <any>error,
                () => this.readonly = true
            );
    }

    onSubmit(value: string) {
        this.save();
    }

    ngOnInit() {
        this.getUserAccount();
        this.getCountries();
        this.checkStateExist();
    }
}