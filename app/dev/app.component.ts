import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';

import './rxjs-operators';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {

    public constructor(public viewContainerRef: ViewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}