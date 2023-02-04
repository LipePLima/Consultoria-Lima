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

    const validation = this.checkRastreamento(rastreamento, inputErro, error)

    if (validation === "Tudo certo") {
      this.rastreamentoService.searchPackage(rastreamento).toPromise().then( (data: any) => {
        this.text = ''
        this.list = data!.eventos
      })

    }

    this.rastreamentoService.searchPackage(rastreamento).toPromise().catch( (data: any) => {
      const error  = data!.error
      const result = error.replace(/[^0-9]/g, '')
      const number = parseInt(result)

      console.log(number)

      setInterval( () => {
        console.log(number - 1000)
      }, 1000)
    })

  }

  private checkRastreamento (rastreamento: string, border: HTMLElement | null, erro: HTMLElement | null) {
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

    for (let i = 0; i < erros.length; i++) {
      if (erros[i].type) {
        return this.styleErro(erros[i].mensage, border, erro)

      } if (erros[erros.length-1].type == false) {
        return 'Tudo certo'

      }

    }
  }

  private styleErro (mensage: string, border: HTMLElement | null, erro:   HTMLElement | null) {
    erro!.textContent    = mensage
    erro!.style.display  = 'initial'
    border!.style.border = '1px solid red'
  }
}
