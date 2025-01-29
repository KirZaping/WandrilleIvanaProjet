import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet'; // Import Leaflet
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-location-discover',
    standalone: true,
    imports: [],
    templateUrl: './location-discover.component.html',
    styleUrl: './location-discover.component.css'
})
export class LocationDiscoverComponent implements AfterViewInit {
    private map: any; 
  
    async ngAfterViewInit(): Promise<void> {
      if (typeof window !== 'undefined') {
        const L = await import('leaflet'); 
        this.initMap(L);
      }
    }
  
    private initMap(L: any): void {
      this.map = L.map('map', {
        center: [46.603354, 1.888334], // Centered on France
        zoom: 6,
      });
  
      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);
  
      // Example Marker (Paris)
      L.marker([48.8566, 2.3522]).addTo(this.map)
        .bindPopup('Paris, France')
        .openPopup();
    }
  }

