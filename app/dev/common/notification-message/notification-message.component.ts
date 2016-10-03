import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Message } from "./message";

@Component({
    moduleId: module.id,
    selector: 'notifications-message',
    templateUrl: 'notification-message.component.html?v=' + version,
    styleUrls: ['notification-message.component.css?v=' + version]
})

export class NotificationMessageComponent implements OnChanges {
    @Input('notification') notifications: Message = <Message> {};

    show: boolean = false;

    isEmptyNotifications(): void {
        this.show = Object.keys(this.notifications).length != 0;
    }

    hideNotifications() {
        setTimeout(function() {
            this.notifications = <Message> {};
            this.show = false;
        }.bind(this), 3000);
    }

    ngOnChanges(changes: SimpleChanges) {
        this.isEmptyNotifications();
        this.hideNotifications();
    }
}