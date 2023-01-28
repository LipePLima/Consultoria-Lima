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

  public getEncomenda (rastreamento: any): void {
    const att: Promise<Object | undefined> = this.rastreamentoService.searchPackage(rastreamento).toPromise()
    att.then( (data: Object | undefined) => {
      console.log(data)
    })
  }
}
