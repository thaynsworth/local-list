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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var state_1 = require('./state');
var StateService = (function () {
    function StateService(http) {
        this.http = http;
    }
    StateService.prototype.getStates = function (country) {
        this.stateUrl = "/api/countries/" + country + "/states";
        return this.http.get(this.stateUrl)
            .map(function (responseData) {
            return responseData.json();
        }).catch(this.handleError)
            .map(function (states) {
            var result = [];
            if (states) {
                states.forEach(function (state) {
                    result.push(new state_1.State(state.name, state.code));
                });
            }
            return result;
        }).catch(this.handleError);
    };
    StateService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    StateService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], StateService);
    return StateService;
}());
exports.StateService = StateService;
//# sourceMappingURL=state.service.js.map