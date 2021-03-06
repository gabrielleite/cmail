import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'cmail-email-form',
    templateUrl: 'email-form.component.html',
    styleUrls: [
        'email-form.component.css'
    ]
})
export class EmailFormComponent {
    @Output() sendEmail = new EventEmitter();

    private _isEmailFormOpen = false;
    private _email = {
        destinatario: '',
        assunto: '',
        conteudo: ''
    };

    toggle() {
        this._isEmailFormOpen = !this._isEmailFormOpen;
    }

    handleSubmit(formEmail: NgForm) {
        if (formEmail.invalid) return;
        
        this.sendEmail.emit({ newEmail: this._email });
        this._email = {
            destinatario: '',
            assunto: '',
            conteudo: ''
        };
        formEmail.reset();
    }

    get isEmailFormOpen() {
        return this._isEmailFormOpen;
    }

    get email() {
        return this._email;
    }
}