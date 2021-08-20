import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMailingComponent } from './news-mailing.component';

describe('NewsMailingComponent', () => {
  let component: NewsMailingComponent;
  let fixture: ComponentFixture<NewsMailingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsMailingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsMailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
