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
var core_1 = require("@angular/core");
var information_form_component_1 = require("./information-form.component");
var information_service_1 = require("./information.service");
var state_service_1 = require("../../services/state/state.service");
var country_service_1 = require("../../services/country/country.service");
var shared_module_1 = require("../../../shared/shared.module");
var notification_message_module_1 = require("../../../common/notification-message/notification-message.module");
var InformationModule = (function () {
    function InformationModule() {
    }
    InformationModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                notification_message_module_1.NotificationMessageModule
            ],
            declarations: [
                information_form_component_1.InformationFormComponent
            ],
            providers: [
                information_service_1.InformationService,
                state_service_1.StateService,
                country_service_1.CountryService
            ],
            exports: [
                information_form_component_1.InformationFormComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], InformationModule);
    return InformationModule;
}());
exports.InformationModule = InformationModule;
//# sourceMappingURL=information.module.js.map