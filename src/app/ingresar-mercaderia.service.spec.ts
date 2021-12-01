import { TestBed } from '@angular/core/testing';

import { IngresarMercaderiaService } from './ingresar-mercaderia.service';

describe('IngresarMercaderiaService', () => {
  let service: IngresarMercaderiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngresarMercaderiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
