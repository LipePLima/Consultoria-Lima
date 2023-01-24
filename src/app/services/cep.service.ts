import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchCepService {

  constructor(private http: HttpClient) { }

  searchAddress(cep: string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
  }
}
