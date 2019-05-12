import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { FloatingActionButtonComponent } from './components/floating-action-button/floating-action-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    InputSearchComponent,
    EmailFormComponent,
    FloatingActionButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
