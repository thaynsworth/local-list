import { NgModule } from "@angular/core";
import { InformationFormComponent } from "./information-form.component";
import { InformationService } from "./information.service";
import { StateService } from "../../services/state/state.service";
import { CountryService } from "../../services/country/country.service";
import { SharedModule } from "../../../shared/shared.module";
import { NotificationMessageModule } from "../../../common/notification-message/notification-message.module";

@NgModule({
    imports: [
        SharedModule,
        NotificationMessageModule
    ],
    declarations: [
        InformationFormComponent
    ],
    providers: [
        InformationService,
        StateService,
        CountryService
    ],
    exports: [
        InformationFormComponent
    ]
})

export class InformationModule {

}