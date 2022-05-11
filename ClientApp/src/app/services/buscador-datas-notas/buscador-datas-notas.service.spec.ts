import { TestBed } from '@angular/core/testing';

import { BuscadorDatasNotasService } from './buscador-datas-notas.service';

describe('BuscadorDatasNotasService', () => {
  let service: BuscadorDatasNotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscadorDatasNotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
