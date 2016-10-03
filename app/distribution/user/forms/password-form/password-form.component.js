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
var forms_1 = require('@angular/forms');
var password_service_1 = require('./password.service');
var validations_1 = require('../../../validations/validations');
var PasswordFormComponent = (function () {
    function PasswordFormComponent(passwordService, formBuilder) {
        this.passwordService = passwordService;
        this.formBuilder = formBuilder;
        this.user = {};
        this.error = false;
        this.readonly = true;
        this.notification = {};
        this.passwordForm = formBuilder.group({
            'oldPassword': ['', forms_1.Validators.required],
            'newPassword': ['', forms_1.Validators.required],
            'confirmPassword': ['', forms_1.Validators.required]
        }, { validator: validations_1.matchingPasswords('newPassword', 'confirmPassword') });
        this.confirmPassword = '';
    }
    PasswordFormComponent.prototype.save = function () {
        var _this = this;
        this.passwordService
            .put(this.user)
            .subscribe(function (res) { return _this.resetPasswordForm(res); }, function (error) { return _this.error = error; });
    };
    PasswordFormComponent.prototype.resetPasswordForm = function (res) {
        this.notification = res;
        if (res.status == "OK") {
            this.readonly = true;
            this.user = { oldPassword: '', newPassword: '' };
            this.confirmPassword = '';
        }
    };
    PasswordFormComponent.prototype.onSubmit = function (value) {
        this.save();
    };
    PasswordFormComponent.prototype.ngOnInit = function () {
    };
    PasswordFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'password-form',
            templateUrl: 'password-form.component.html?v=' + version,
            styleUrls: ['password-form.component.css?v=' + version]
        }), 
        __metadata('design:paramtypes', [password_service_1.PasswordService, forms_1.FormBuilder])
    ], PasswordFormComponent);
    return PasswordFormComponent;
}());
exports.PasswordFormComponent = PasswordFormComponent;
//# sourceMappingURL=password-form.component.js.map