import { Component } from '@angular/core';

@Component({
    selector: 'cmail-menu',
    templateUrl: './menu.component.html',
    styleUrls: [
        'menu.component.css'
    ]
})
export class MenuComponent {

    private _isMenuOpen = false;

    toggle() {
        this._isMenuOpen = !this._isMenuOpen;
    }

    get isMenuOpen() {
        return this._isMenuOpen;
    }
 }