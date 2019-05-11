import { Component } from '@angular/core';

@Component({
    selector: 'cmail-email-form',
    templateUrl: 'email-form.component.html',
    styleUrls: [
        'email-form.component.css'
    ]
})
export class EmailFormComponent {
    private _isEmailFormOpen = false;

    toggle() {
        this._isEmailFormOpen = !this._isEmailFormOpen;
    }

    get isEmailFormOpen() {
        return this._isEmailFormOpen;
    }
}