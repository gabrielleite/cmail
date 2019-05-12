import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ModuloRoteamento } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { FloatingActionButtonComponent } from './components/floating-action-button/floating-action-button.component';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    InputSearchComponent,
    EmailFormComponent,
    FloatingActionButtonComponent,
    CaixaDeEntradaComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoteamento
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
