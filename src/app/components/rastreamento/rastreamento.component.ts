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
    this.rastreamentoService.searchPackage(rastreamento).toPromise()
    .catch( (data: any) => {
      console.log(data)
    })
  }
}
