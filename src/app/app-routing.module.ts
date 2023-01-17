import { RastreamentoComponent } from './components/rastreamento/rastreamento.component';
import { CepComponent } from './components/cep/cep.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'buscaCep',
    pathMatch: 'full'
  },
  {
    path: 'buscaCep',
    component: CepComponent
  },
  {
    path: 'rastreamento',
    component: RastreamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
