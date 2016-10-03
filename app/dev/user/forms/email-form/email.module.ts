import { NgModule } from "@angular/core";
import { EmailFormComponent } from "./email-form.component";
import { EmailService } from "./email.service";
import { SharedModule } from "../../../shared/shared.module";
import { NotificationMessageModule } from "../../../common/notification-message/notification-message.module";

@NgModule({
    imports: [
        SharedModule,
        NotificationMessageModule
    ],
    declarations: [
        EmailFormComponent
    ],
    providers: [
        EmailService
    ],
    exports: [
        EmailFormComponent
    ]
})

export class EmailModule {

}