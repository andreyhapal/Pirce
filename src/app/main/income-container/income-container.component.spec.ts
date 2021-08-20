import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeContainerComponent } from './income-container.component';

describe('IncomeContainerComponent', () => {
  let component: IncomeContainerComponent;
  let fixture: ComponentFixture<IncomeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
