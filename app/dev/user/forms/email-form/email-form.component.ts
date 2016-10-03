import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { EmailService } from './email.service';
import { Email } from "./email";
import { Message } from "../../../common/notification-message/message";

@Component({
    moduleId: module.id,
    selector: 'email-form',
    templateUrl: 'email-form.component.html?v=' + version,
    styleUrls: ['email-form.component.css?v=' + version]
})

export class EmailFormComponent implements OnInit{
    user: Email = <Email> {};
    error: any;
    emailForm: FormGroup;
    readonly: boolean = true;

    notification: Message = <Message> {};

    constructor(private emailService: EmailService, private formBuilder: FormBuilder) {
        this.emailForm = formBuilder.group({
            'emailField': ['', Validators.compose([Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])]
        })
    }

    getUserEmail(): void {
        this.emailService.getUserEmail()
            .subscribe(
                email => this.user = email,
                error =>  this.error = <any>error);
    }

    save() {
        this.emailService
            .put(this.user)
            .subscribe(
                res => this.notification = res,
                error =>  this.error = <any>error,
                () => this.readonly = true
            );
    }

    onSubmit(value: string) {
        this.save();
    }

    ngOnInit() {
        this.getUserEmail();
    }
}
