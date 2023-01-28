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
    this.rastreamentoService.searchPackage(rastreamento).toPromise().then( (data: any) => {
      this.text = ''
      this.list = data!.eventos
    })
  }
}
