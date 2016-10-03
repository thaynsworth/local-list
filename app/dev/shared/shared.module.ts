import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { NotificationMessageModule } from "../common/notification-message/notification-message.module";


@NgModule({
    imports:      [
        CommonModule,
        NotificationMessageModule
    ],
    declarations: [

    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        NotificationMessageModule
    ]
})
export class SharedModule { }