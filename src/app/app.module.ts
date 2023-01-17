import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CepComponent } from './components/cep/cep.component';
import { RastreamentoComponent } from './components/rastreamento/rastreamento.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CepComponent,
    RastreamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
