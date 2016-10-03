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
var password_form_component_1 = require("./password-form.component");
var password_service_1 = require("./password.service");
var shared_module_1 = require("../../../shared/shared.module");
var notification_message_module_1 = require("../../../common/notification-message/notification-message.module");
var PasswordModule = (function () {
    function PasswordModule() {
    }
    PasswordModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                notification_message_module_1.NotificationMessageModule
            ],
            declarations: [
                password_form_component_1.PasswordFormComponent
            ],
            providers: [
                password_service_1.PasswordService
            ],
            exports: [
                password_form_component_1.PasswordFormComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PasswordModule);
    return PasswordModule;
}());
exports.PasswordModule = PasswordModule;
//# sourceMappingURL=password.module.js.map