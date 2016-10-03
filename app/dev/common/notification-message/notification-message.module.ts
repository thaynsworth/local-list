import { NgModule } from "@angular/core";
import { NotificationMessageComponent } from "./notification-message.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        NotificationMessageComponent
    ],
    exports: [
        NotificationMessageComponent
    ]
})

export class NotificationMessageModule {

}