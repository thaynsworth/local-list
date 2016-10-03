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
var message_1 = require("./message");
var NotificationMessageComponent = (function () {
    function NotificationMessageComponent() {
        this.notifications = {};
        this.show = false;
    }
    NotificationMessageComponent.prototype.isEmptyNotifications = function () {
        this.show = Object.keys(this.notifications).length != 0;
    };
    NotificationMessageComponent.prototype.hideNotifications = function () {
        setTimeout(function () {
            this.notifications = {};
            this.show = false;
        }.bind(this), 3000);
    };
    NotificationMessageComponent.prototype.ngOnChanges = function (changes) {
        this.isEmptyNotifications();
        this.hideNotifications();
    };
    __decorate([
        core_1.Input('notification'), 
        __metadata('design:type', message_1.Message)
    ], NotificationMessageComponent.prototype, "notifications", void 0);
    NotificationMessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'notifications-message',
            templateUrl: 'notification-message.component.html?v=' + version,
            styleUrls: ['notification-message.component.css?v=' + version]
        }), 
        __metadata('design:paramtypes', [])
    ], NotificationMessageComponent);
    return NotificationMessageComponent;
}());
exports.NotificationMessageComponent = NotificationMessageComponent;
//# sourceMappingURL=notification-message.component.js.map