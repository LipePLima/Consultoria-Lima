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

    error!.style.display  = 'none'
    inputErro!.style.border = 'none'

    this.checkRastreamento(rastreamento, inputErro, error)

    this.rastreamentoService.searchPackage(rastreamento).toPromise().then( (data: any) => {
      this.text = ''
      this.list = data!.eventos
    })

    // this.rastreamentoService.searchPackage(rastreamento).toPromise().catch( (data: any) => {
    //   console.log(data)
    //   console.log(data!.error)
    // })

  }

  private checkRastreamento (rastreamento: string, border: any, erro: any) {
    const regex: RegExp = /^[A-Z]{2}[0-9]{9}[A-Z]{2}$/g;
    const regexRastreamento = rastreamento.replace(regex, 'correto')

    const erros = [
      {
        type: rastreamento == '',
        mensage: 'Digite um código'
      },
      {
        type: rastreamento.length < 13,
        mensage: 'OBRIGATÓRIO: 9 números e 4 letras'
      },
      {
        type: regexRastreamento !== 'correto',
        mensage: 'Digite um código válido'
      }
    ];

    erros.forEach( object => {
      if (object.type == true) {
          erro!.textContent    = ''
          erro!.textContent    = object.mensage
          erro!.style.display  = 'initial'
          border!.style.border = '1px solid red'
          return console.log(object.type)
      } else {
        return ''
      }
    })

  }
}
