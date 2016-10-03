import { Component, OnInit, ViewEncapsulation  } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.htm',
    styleUrls: ['user.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class UserComponent implements OnInit{

    constructor() { }

    ngOnInit() {

    }
}