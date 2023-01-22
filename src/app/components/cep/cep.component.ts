import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css', './cepMQ.component.css']
})

export class CepComponent {
  constructor(private httpClient: HttpClient){}

  public inputCep: string | undefined

  getAddress(): void {
    const input: HTMLElement | null = document.getElementById('iCep');
    const inputErro: HTMLElement | null = document.querySelector('.erro');

    if (this.inputCep?.length === 8) {
      if (input !== null && inputErro !== null) {
        inputErro.style.display = 'none'
        input.style.border = 'none'
      }

      let url: string = `https://api.postmon.com.br/v1/cep/${this.inputCep}`

      this.httpClient.get(url).toPromise().then( (data: object | undefined) => {
        const tbody = document.querySelector('#tbody-line')?.childNodes

        if (data !== undefined && tbody !== undefined) {
          const objbody = {
            'logradouro': tbody[0],
            'bairro': tbody[1],
            'localidade': tbody[2],
            'cep': tbody[3]
          }
        }
      })
    } else {
      if (input !== null && inputErro !== null) {
        inputErro.style.display = 'initial'
        input.style.border = '1px solid red'
      }
    }
  }
}
