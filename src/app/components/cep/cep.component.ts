import { SearchCepService } from '../../services/cep.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css', './cepMQ.component.css']
})

export class CepComponent {
  constructor(
    private cepService: SearchCepService,
  ){}

  public getAddress(cep: any) {
    this.cepService.searchAddress(cep).toPromise().then( (data: any) => {
      const cepEl:  Element | null = document.querySelector('#cep');
      const log:    Element | null = document.querySelector('#logradouro');
      const bairro: Element | null = document.querySelector('#bairro');
      const cidade: Element | null = document.querySelector('#cidade');
      const uf:     Element | null = document.querySelector('#ud');

      if (cepEl != null && log != null && bairro != null && cidade != null && uf != null) {
        cepEl.textContent  = data.cep;
        log.textContent    = data.logradouro;
        bairro.textContent = data.bairro;
        cidade.textContent = data.localidade;
        uf.textContent     = data.uf;
      }
    });

    // Área de erro
    // const inputErroBorder: HTMLElement | null = document.getElementById('iCep');
    // const inputErro: HTMLElement | null       = document.querySelector('.erro');

    // if (inputErroBorder !== null && inputErro !== null) {
    //   inputErro.style.display      = 'none'
    //   inputErroBorder.style.border = 'none'
    // } else {
    //   if (inputErroBorder != null && inputErro != null) {
    //     inputErro.style.display      = 'initial'
    //     inputErroBorder.style.border = '1px solid red'
    //   }
    // }
  }
}
