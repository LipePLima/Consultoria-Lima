import { Component } from '@angular/core';
import { switchMapTo } from 'rxjs';
import { RastreamentoService } from '../../services/rastreamento.service';

@Component({
  selector: 'app-rastreamento',
  templateUrl: './rastreamento.component.html',
  styleUrls: ['./rastreamento.component.css', './rastreamentoMQ.component.css']
})
export class RastreamentoComponent {
  constructor (
    private rastreamentoService: RastreamentoService
  ) { }

  public text: any = 'Digite um código de rastreamento'
  public list: any

  public getEncomenda (rastreamento: any): void {
    const inputErro: HTMLElement | null = document.getElementById('iRas');
    const error    : HTMLElement | null = document.getElementById('erro');

    const regexTest = /^[A-Z]{2}[1-9]{9}[A-Z]{2}$/

    rastreamento = rastreamento.replace(regexTest, '')

    if (rastreamento == '') {
      this.checkCep(inputErro, error, 'Digite um código')

    } else if (rastreamento.length < 13) {
      this.checkCep(inputErro, error, 'OBRIGATÓRIO: 9 números e 4 letras')

    }

    this.rastreamentoService.searchPackage(rastreamento).toPromise().then( (data: any) => {
      this.text = ''
      this.list = data!.eventos
    })
  }


  private checkCep (border: any, erro: any, text: any) {
    erro!.textContent    = text
    erro!.style.display  = 'initial'
    border!.style.border = '1px solid red'
  }
}
