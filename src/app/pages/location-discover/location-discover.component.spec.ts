import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDiscoverComponent } from './location-discover.component';

describe('LocationDiscoverComponent', () => {
  let component: LocationDiscoverComponent;
  let fixture: ComponentFixture<LocationDiscoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationDiscoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
