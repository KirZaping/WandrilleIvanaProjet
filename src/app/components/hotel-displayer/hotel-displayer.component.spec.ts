import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDisplayerComponent } from './hotel-displayer.component';

describe('HotelDisplayerComponent', () => {
  let component: HotelDisplayerComponent;
  let fixture: ComponentFixture<HotelDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelDisplayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
