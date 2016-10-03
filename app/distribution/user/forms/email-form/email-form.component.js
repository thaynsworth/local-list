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
var email_service_1 = require('./email.service');
var EmailFormComponent = (function () {
    function EmailFormComponent(emailService, formBuilder) {
        this.emailService = emailService;
        this.formBuilder = formBuilder;
        this.user = {};
        this.readonly = true;
        this.notification = {};
        this.emailForm = formBuilder.group({
            'emailField': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])]
        });
    }
    EmailFormComponent.prototype.getUserEmail = function () {
        var _this = this;
        this.emailService.getUserEmail()
            .subscribe(function (email) { return _this.user = email; }, function (error) { return _this.error = error; });
    };
    EmailFormComponent.prototype.save = function () {
        var _this = this;
        this.emailService
            .put(this.user)
            .subscribe(function (res) { return _this.notification = res; }, function (error) { return _this.error = error; }, function () { return _this.readonly = true; });
    };
    EmailFormComponent.prototype.onSubmit = function (value) {
        this.save();
    };
    EmailFormComponent.prototype.ngOnInit = function () {
        this.getUserEmail();
    };
    EmailFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'email-form',
            templateUrl: 'email-form.component.html?v=' + version,
            styleUrls: ['email-form.component.css?v=' + version]
        }), 
        __metadata('design:paramtypes', [email_service_1.EmailService, forms_1.FormBuilder])
    ], EmailFormComponent);
    return EmailFormComponent;
}());
exports.EmailFormComponent = EmailFormComponent;
//# sourceMappingURL=email-form.component.js.map