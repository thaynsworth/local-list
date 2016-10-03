import { NgModule } from "@angular/core";
import { PasswordFormComponent } from "./password-form.component";
import { PasswordService } from "./password.service";
import { SharedModule } from "../../../shared/shared.module";
import { NotificationMessageModule } from "../../../common/notification-message/notification-message.module";

@NgModule({
    imports: [
        SharedModule,
        NotificationMessageModule
    ],
    declarations: [
        PasswordFormComponent
    ],
    providers: [
        PasswordService
    ],
    exports: [
        PasswordFormComponent
    ]
})

export class PasswordModule {

}