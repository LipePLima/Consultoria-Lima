import { Component } from '@angular/core';
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

  public getEncomenda (rastreamento: string): void {
    const inputErro: HTMLElement | null = document.getElementById('iRas');
    const error    : HTMLElement | null = document.getElementById('erro');

    const regex: RegExp = /^[A-Z]{2}[0-9]{9}[A-Z]{2}$/g;

    const checkRastreamento = rastreamento.replace(regex, 'correto')

    if (rastreamento == '') {
      this.checkCep(inputErro, error, 'Digite um código')

    } else if (rastreamento.length < 13) {
      this.checkCep(inputErro, error, 'OBRIGATÓRIO: 9 números e 4 letras')

    } else if (checkRastreamento !== 'correto') {
      this.checkCep(inputErro, error, 'Digite um código válido')

    } else {
      error!.style.display  = 'none'
      inputErro!.style.border = 'none'

      this.rastreamentoService.searchPackage(rastreamento).toPromise().then( (data: any) => {
        this.text = ''
        this.list = data!.eventos
      })

      this.rastreamentoService.searchPackage(rastreamento).toPromise().catch( (data: any) => {
        console.log(data)
        console.log(data!.error)
      })
    }
  }

  private checkCep (border: any, erro: any, text: any) {
    erro!.textContent    = text
    erro!.style.display  = 'initial'
    border!.style.border = '1px solid red'
  }
}
