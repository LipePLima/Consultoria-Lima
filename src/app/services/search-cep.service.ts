import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchCepService {

  constructor(private http: HttpClient) { }

  getAddress(cep: string) {
    cep = cep.replace(/\D/g, '');

    const validaCep = /^[0-9]{8}$/;

    if (validaCep.test(cep)) {
      return this.http.get(`https://api.postmon.com.br/v1/cep/${cep}`)
    }

    return ''
  }
}
