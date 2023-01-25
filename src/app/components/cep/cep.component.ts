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
    const inputErroBorder: HTMLElement | null = document.getElementById('iCep');
    const inputErro:       HTMLElement | null = document.querySelector('.erro');
    const table:               Element | null = document.querySelector('#container__table');

    const convertTable = table as HTMLElement;

    cep = cep.replace(/\D/g, '');

    if (cep == '') {
      this.checkCep(inputErroBorder, inputErro, "Digite um CEP");

    } else if (cep.length < 8) {
      this.checkCep(inputErroBorder, inputErro, "Digite 8 números");

    } else {
      inputErro!.style.display      = 'none'
      inputErroBorder!.style.border = 'none'
      convertTable!.style.display   = 'flex'

      this.cepService.searchAddress(cep).toPromise().then( (data: any) => {
        const cepEl:      Element | null = document.querySelector('#cep');
        const log:        Element | null = document.querySelector('#logradouro');
        const bairro:     Element | null = document.querySelector('#bairro');
        const localidade: Element | null = document.querySelector('#localidade');

        cepEl!.textContent      = data.cep;
        log!.textContent        = data.logradouro;
        bairro!.textContent     = data.bairro; ;
        localidade!.textContent = `${data.localidade}/${data.uf}`;

      });
    }
  }

  private checkCep (border: any, erro: any, text: any) {
    erro!.textContent    = text
    erro!.style.display  = 'initial'
    border!.style.border = '1px solid red'
  }
}
