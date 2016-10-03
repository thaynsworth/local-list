"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var information_service_1 = require('./information.service');
var country_service_1 = require('../../services/country/country.service');
var state_service_1 = require('../../services/state/state.service');
var InformationFormComponent = (function () {
    function InformationFormComponent(informationService, countryService, stateService) {
        this.informationService = informationService;
        this.countryService = countryService;
        this.stateService = stateService;
        this.user = {};
        this.states = [];
        this.readonly = true;
        this.notification = {};
    }
    InformationFormComponent.prototype.getUserAccount = function () {
        var _this = this;
        this.informationService.getUserAccount()
            .subscribe(function (account) { return _this.user = account; }, function (error) { return _this.error = error; });
    };
    InformationFormComponent.prototype.getCountries = function () {
        var _this = this;
        this.countryService.getCountries()
            .subscribe(function (countries) { return _this.countries = countries; }, function (error) { return _this.error = error; }, function () { return _this.getStates(_this.user.country, _this.user.countryName); });
    };
    InformationFormComponent.prototype.getStates = function (value, name) {
        var _this = this;
        this.user.countryName = name;
        this.user.country = value;
        this.stateService.getStates(value)
            .subscribe(function (states) { return _this.states = states; }, function (error) { return _this.error = error; }, function () { return _this.checkStateExist(); });
    };
    InformationFormComponent.prototype.selectedState = function (name, code) {
        this.user.regionName = name;
        this.user.region = code;
    };
    InformationFormComponent.prototype.checkStateExist = function () {
        this.disabled = !(this.states.length);
        if (this.disabled) {
            this.user.regionName = '';
            this.user.region = '';
        }
    };
    InformationFormComponent.prototype.save = function () {
        var _this = this;
        this.informationService.put(this.user)
            .subscribe(function (res) { return _this.notification = res; }, function (error) { return _this.error = error; }, function () { return _this.readonly = true; });
    };
    InformationFormComponent.prototype.onSubmit = function (value) {
        this.save();
    };
    InformationFormComponent.prototype.ngOnInit = function () {
        this.getUserAccount();
        this.getCountries();
        this.checkStateExist();
    };
    InformationFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'information-form',
            templateUrl: 'information-form.component.html?v=' + version,
            styleUrls: ['information-form.component.css?v=' + version]
        }), 
        __metadata('design:paramtypes', [information_service_1.InformationService, country_service_1.CountryService, state_service_1.StateService])
    ], InformationFormComponent);
    return InformationFormComponent;
}());
exports.InformationFormComponent = InformationFormComponent;
//# sourceMappingURL=information-form.component.js.map