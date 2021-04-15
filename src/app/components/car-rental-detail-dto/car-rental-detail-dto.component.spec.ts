import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentalDetailDtoComponent } from './car-rental-detail-dto.component';

describe('CarRentalDetailDtoComponent', () => {
  let component: CarRentalDetailDtoComponent;
  let fixture: ComponentFixture<CarRentalDetailDtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarRentalDetailDtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRentalDetailDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
