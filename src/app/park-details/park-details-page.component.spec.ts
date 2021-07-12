import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkDetailsPageComponent } from './park-details-page.component';

describe('ParkDetailsComponent', () => {
  let component: ParkDetailsPageComponent;
  let fixture: ComponentFixture<ParkDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParkDetailsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
