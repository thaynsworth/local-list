import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators
} from '@angular/forms'

import { PasswordService } from './password.service';
import { Password } from "./password";
import { matchingPasswords } from '../../../validations/validations'
import { Message } from "../../../common/notification-message/message";

@Component({
    moduleId: module.id,
    selector: 'password-form',
    templateUrl: 'password-form.component.html?v=' + version,
    styleUrls: ['password-form.component.css?v=' + version]
})

export class PasswordFormComponent implements OnInit {
    user: Password = <Password> {};
    passwordForm: FormGroup;
    confirmPassword: string;
    error: boolean = false;
    readonly: boolean = true;

    notification: Message = <Message> {};

    constructor(private passwordService: PasswordService, private formBuilder: FormBuilder) {
        this.passwordForm = formBuilder.group({
            'oldPassword': ['', Validators.required],
            'newPassword': ['', Validators.required],
            'confirmPassword': ['', Validators.required]
        }, {validator: matchingPasswords('newPassword', 'confirmPassword')});

        this.confirmPassword = '';
    }

    save() {
        this.passwordService
            .put(this.user)
            .subscribe(
                res => this.resetPasswordForm(res),
                error =>  this.error = <any>error
            );
    }

    resetPasswordForm(res: any):void {
        this.notification = res;

        if (res.status == "OK") {
            this.readonly = true;
            this.user = <Password> { oldPassword: '', newPassword: ''};
            this.confirmPassword = '';
        }
    }

    onSubmit(value: string): void {
        this.save();
    }

    ngOnInit() {

    }
}