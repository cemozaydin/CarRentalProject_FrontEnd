import { TestBed } from '@angular/core/testing';

import { CarRentalDetailDtoService } from './car-rental-detail-dto.service';

describe('CarRentalDetailDtoService', () => {
  let service: CarRentalDetailDtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarRentalDetailDtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
