import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomRowComponent } from './bottom-row.component';

describe('BottomRowComponent', () => {
  let component: BottomRowComponent;
  let fixture: ComponentFixture<BottomRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
