import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelByLocationComponent } from './hotel-by-location.component';

describe('HotelByLocationComponent', () => {
  let component: HotelByLocationComponent;
  let fixture: ComponentFixture<HotelByLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelByLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
