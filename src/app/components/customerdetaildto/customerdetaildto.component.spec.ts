import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdetaildtoComponent } from './customerdetaildto.component';

describe('CustomerdetaildtoComponent', () => {
  let component: CustomerdetaildtoComponent;
  let fixture: ComponentFixture<CustomerdetaildtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerdetaildtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerdetaildtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
