import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  private _emailList = [];

  handleNewEmail(event) {
    const newEmail = event.newEmail;
    this._emailList.push(newEmail);
  }

  get emailList() {
    return this._emailList;
  }
}
