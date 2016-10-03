import { Component, OnInit, ViewEncapsulation  } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html?=' + version,
    styleUrls: ['user.component.css?v=' + version],
    encapsulation: ViewEncapsulation.None
})

export class UserComponent implements OnInit{

    constructor() { }

    ngOnInit() {

    }
}