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

    if (cep.length < 8) {
      inputErro!.style.display      = 'initial'
      inputErroBorder!.style.border = '1px solid red'
    } else {
      inputErro!.style.display      = 'none'
      inputErroBorder!.style.border = 'none'

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
}
