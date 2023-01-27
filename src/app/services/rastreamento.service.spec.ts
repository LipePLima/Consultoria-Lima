/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RastreamentoService } from './rastreamento.service';

describe('Service: Rastreamento', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RastreamentoService]
    });
  });

  it('should ...', inject([RastreamentoService], (service: RastreamentoService) => {
    expect(service).toBeTruthy();
  }));
});
