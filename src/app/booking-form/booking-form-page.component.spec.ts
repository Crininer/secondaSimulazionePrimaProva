import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFormPageComponent } from './booking-form-page.component';

describe('BookingFormComponent', () => {
  let component: BookingFormPageComponent;
  let fixture: ComponentFixture<BookingFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingFormPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
