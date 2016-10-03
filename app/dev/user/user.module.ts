import { NgModule, Optional, SkipSelf } from '@angular/core';
import { UserComponent } from "./user.component";
import { SharedModule } from "../shared/shared.module";
import { PasswordModule } from "./forms/password-form/password.module";
import { EmailModule } from "./forms/email-form/email.module";
import { InformationModule } from "./forms/information-form/information.module";

@NgModule({
    imports: [
        SharedModule,
        PasswordModule,
        EmailModule,
        InformationModule
    ],
    declarations: [
        UserComponent
    ]
})
export class UserModule {
    constructor (@Optional() @SkipSelf() parentModule: UserModule) {
        if (parentModule) {
            throw new Error(
                'UserModule is already loaded. Import it in the AppModule only');
        }
    }
}