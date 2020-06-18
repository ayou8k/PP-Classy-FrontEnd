import { TestBed } from '@angular/core/testing';

import { ElementmoduleService } from './elementmodule.service';

describe('ElementmoduleService', () => {
  let service: ElementmoduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementmoduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
