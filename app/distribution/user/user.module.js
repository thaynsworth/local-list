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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var user_component_1 = require("./user.component");
var shared_module_1 = require("../shared/shared.module");
var password_module_1 = require("./forms/password-form/password.module");
var email_module_1 = require("./forms/email-form/email.module");
var information_module_1 = require("./forms/information-form/information.module");
var UserModule = (function () {
    function UserModule(parentModule) {
        if (parentModule) {
            throw new Error('UserModule is already loaded. Import it in the AppModule only');
        }
    }
    UserModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                password_module_1.PasswordModule,
                email_module_1.EmailModule,
                information_module_1.InformationModule
            ],
            declarations: [
                user_component_1.UserComponent
            ]
        }),
        __param(0, core_1.Optional()),
        __param(0, core_1.SkipSelf()), 
        __metadata('design:paramtypes', [UserModule])
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map