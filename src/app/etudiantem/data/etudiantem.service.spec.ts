import { TestBed } from '@angular/core/testing';

import { EtudaintEM } from './etudaint-e-m.service';

describe('EtudiantemService', () => {
  let service: EtudaintEM<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtudaintEM);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
