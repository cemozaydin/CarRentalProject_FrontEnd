import { TestBed } from '@angular/core/testing';

import { CustomerdetaildtoService } from './customerdetaildto.service';

describe('CustomerdetaildtoService', () => {
  let service: CustomerdetaildtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerdetaildtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
