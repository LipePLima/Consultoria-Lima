import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RastreamentoService {

  constructor(private http: HttpClient) { }

  searchPackage (encomenda: any) {
    return this.http.get(`https://api.linketrack.com/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=${encomenda}`)
  }
}
