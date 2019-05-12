import { Component } from '@angular/core';

@Component({
    templateUrl: './caixa-de-entrada.component.html',
    styleUrls: [
        'caixa-de-entrada.component.css'
    ]
})
export class CaixaDeEntradaComponent {
    private _emailList = [];

    handleNewEmail(event) {
        const newEmail = event.newEmail;
        this._emailList.push(newEmail);
    }

    get emailList() {
        return this._emailList;
    }
}