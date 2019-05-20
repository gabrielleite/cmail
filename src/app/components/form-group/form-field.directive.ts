import { OnInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[cmailFormField]'
})
export class FormFieldDirective implements OnInit {

    constructor(private campo: ElementRef<HTMLInputElement | HTMLTextAreaElement>) { }

    ngOnInit(): void {
        const campo = this.campo.nativeElement;
        if (campo.name) {
            campo.id = campo.name;
            campo.setAttribute('placeholder', ' ');
            campo.classList.add('mdl-textfield__input');
        } else {
            throw new Error("Atributo 'name' é obrigatório");
        }
    }
}