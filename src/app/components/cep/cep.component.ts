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
    if (this.inputCep?.length === 8) {
      let url: string = `https://api.postmon.com.br/v1/cep/${this.inputCep}`
      this.httpClient.get(url).toPromise().then(data => {
        console.log(data)
      })
    } else {
      const input: HTMLElement | null = document.getElementById('iCep');
      if (input !== null) {
        input.style.border = '1px solid red'
      }
    }
  }
}
