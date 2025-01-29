import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet'; 
import { CommonModule } from '@angular/common';



@Component({
    selector: 'app-location-discover',
    standalone: true,
    imports: [],
    templateUrl: './location-discover.component.html',
    styleUrl: './location-discover.component.css'
})
export class LocationDiscoverComponent implements AfterViewInit {
  private map!: L.Map; 

  // List of major cities in France with coordinates
  private cities = [
      { name: "Paris", lat: 48.8566, lon: 2.3522 },
      { name: "Marseille", lat: 43.2965, lon: 5.3698 },
      { name: "Lyon", lat: 45.764, lon: 4.8357 },
      { name: "Toulouse", lat: 43.6047, lon: 1.4442 },
      { name: "Nice", lat: 43.7102, lon: 7.262 },
      { name: "Nantes", lat: 47.2184, lon: -1.5536 },
      { name: "Strasbourg", lat: 48.5734, lon: 7.7521 },
      { name: "Bordeaux", lat: 44.8378, lon: -0.5792 },
      { name: "Lille", lat: 50.6292, lon: 3.0573 }
  ];

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

       // ✅ Use Leaflet's Marker Icon from a CDN
       const DefaultIcon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        shadowUrl: null,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    // ✅ Add multiple city markers using the new icon
    this.cities.forEach(city => {
        L.marker([city.lat, city.lon], { icon: DefaultIcon })
            .addTo(this.map)
            .bindPopup(`<b>${city.name}</b>`)
            .bindTooltip(city.name, { // ✅ Tooltip appears on hover
              permanent: false,  // Tooltip appears only when hovering
              direction: "top",  // Tooltip appears above the pin
              opacity: 0.8       // Slight transparency for better visibility
          })
            .on("click", () => {
                window.location.href = `/destination/${city.name.toLowerCase()}`;
            });
          });

      // // Loop through cities and add markers
      // this.cities.forEach(city => {
      //     L.marker([city.lat, city.lon])
      //         .addTo(this.map)
      //         .bindPopup(`<b>${city.name}</b>`)
      //         .on("click", () => {
      //             window.location.href = `/destination/${city.name.toLowerCase()}`;
      //         });
      // });
  }
}