import { SearchCepService } from '../../services/search-cep.service';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css', './cepMQ.component.css']
})

export class CepComponent {
  constructor(
    private cepService: SearchCepService,
    private form: FormsModule
  ){}

  public inputCep: string | undefined

  returnAddress(): void {

    const cep: string | undefined = this.inputCep

    const input: HTMLElement | null     = document.getElementById('iCep');
    const inputErro: HTMLElement | null = document.querySelector('.erro');

    if (cep != null && cep !== '') {
      if (input != null && inputErro != null) {
        inputErro.style.display = 'none'
        input.style.border = 'none'
      }

      console.log(this.cepService.getAddress(cep))
    }
  }
}
