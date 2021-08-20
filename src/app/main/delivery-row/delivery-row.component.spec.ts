import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryRowComponent } from './delivery-row.component';

describe('DeliveryRowComponent', () => {
  let component: DeliveryRowComponent;
  let fixture: ComponentFixture<DeliveryRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
