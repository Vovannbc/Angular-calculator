import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-ngIf-example',
    templateUrl: 'app-ngIf-example.component.html',
})

export class AppNgifComponent{
    isVisible: boolean = true;

    toggle() {
        this.isVisible = this.isVisible ? false : true;
    }
}