import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'cmail-form-group',
    templateUrl: './form-group.component.html',
    styleUrls: [
        'form-group.component.css'
    ]
})
export class FormGroupComponent implements OnInit {

    private _textoDaLabel: string = '';
    private _idCampo: string = '';
    
    constructor(private elemento: ElementRef<HTMLElement>) {}

    ngOnInit(): void {
        const campo = this.elemento.nativeElement.querySelector('input');
        this._textoDaLabel = campo.name
                                .replace(
                                    campo.name[0], 
                                    campo.name[0].toUpperCase()
                                );
		this._idCampo = campo.name;
    }

    get textoDaLabel() {
        return this._textoDaLabel;
    }

    get idCampo() {
        return this._idCampo;
    }
}