import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HotelByLocationComponent } from './pages/hotel-by-location/hotel-by-location.component';
import { HotelDescriptionComponent } from './pages/hotel-description/hotel-description.component';
import { LocationDescriptionComponent } from './pages/location-description/location-description.component';
import { LocationDiscoverComponent } from './pages/location-discover/location-discover.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'hotel-by-location', component: HotelByLocationComponent },
  { path: 'hotel-description', component: HotelDescriptionComponent },
  { path: 'location-description', component: LocationDescriptionComponent },
  { path: 'location-discover', component: LocationDiscoverComponent },
  { path: '**', redirectTo: '' }
];
