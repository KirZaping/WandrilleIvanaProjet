import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';


@Component({
    selector: 'app-location-discover',
    standalone: true,
    imports: [],
    templateUrl: './location-discover.component.html',
    styleUrl: './location-discover.component.css'
})

export class LocationDiscoverComponent implements AfterViewInit {
    private map!: any;
    private L: any;
    private searchMarker: any = null;
    private cityMarkers: any[] = []; 

    constructor(@Inject(PLATFORM_ID) private platformId: any, private router: Router) {}

    private cities = [
        { name: "Paris", lat: 48.8566, lon: 2.3522, wiki: "https://en.wikipedia.org/wiki/Paris" },
        { name: "Marseille", lat: 43.2965, lon: 5.3698, wiki: "https://en.wikipedia.org/wiki/Marseille" },
        { name: "Lyon", lat: 45.764, lon: 4.8357, wiki: "https://en.wikipedia.org/wiki/Lyon" },
        { name: "Toulouse", lat: 43.6047, lon: 1.4442, wiki: "https://en.wikipedia.org/wiki/Toulouse" },
        { name: "Nice", lat: 43.7102, lon: 7.262, wiki: "https://en.wikipedia.org/wiki/Nice,_France" },
        { name: "Nantes", lat: 47.2184, lon: -1.5536, wiki: "https://en.wikipedia.org/wiki/Nantes" },
        { name: "Strasbourg", lat: 48.5734, lon: 7.7521, wiki: "https://en.wikipedia.org/wiki/Strasbourg" },
        { name: "Bordeaux", lat: 44.8378, lon: -0.5792, wiki: "https://en.wikipedia.org/wiki/Bordeaux" },
        { name: "Lille", lat: 50.6292, lon: 3.0573, wiki: "https://en.wikipedia.org/wiki/Lille" },
        { name: "Le Mans", lat: 48.0061, lon: 0.1996, wiki: "https://en.wikipedia.org/wiki/Le_Mans" }
    ];

    public async ngAfterViewInit(): Promise<void> {
        if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined') {
            this.L = await import('leaflet'); 
            await this.initMap();
        }
    }

    private async initMap(): Promise<void> {
        this.map = this.L.map('map', {
            center: [46.603354, 1.888334],
            zoom: 6,
        });

        this.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(this.map);

        const geocoderModule = await import('leaflet-control-geocoder');
        const geocoder = new (geocoderModule as any).Geocoder.Nominatim({
            geocodingQueryParams: {
                lang: 'fr',
                countrycodes: 'fr',
                'accept-language': 'fr',
                addressdetails: 1,
                format: 'json',
                limit: 1, 
                namedetails: 1,
                extratags: 1,
                type: 'city' 
            }
        });

        const RedIcon = this.L.icon({
            iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png', 
            shadowUrl: undefined,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        

        const searchControl = (this.L.Control as any).geocoder({
            geocoder,
            defaultMarkGeocode: false,
            position: 'topright',
            errorMessage: "",
        })
        .on("markgeocode", (event: any) => {
            console.log("Geocoder Response:", event);  

            if (!event || !event.geocode || !event.geocode.center) {
                console.error(" No valid geocode result found!");
                return;
            }

            const cityName = event.geocode.name ? event.geocode.name.split(",")[0].trim() : "Unknown";

            const latlng = event.geocode.center;
            
            this.cityMarkers.forEach(marker => this.map.removeLayer(marker));

            this.map.setView(latlng, 10);

            if (this.searchMarker) {
                this.map.removeLayer(this.searchMarker);
            }

            this.searchMarker = this.L.marker(latlng, { icon: RedIcon }) 
                .addTo(this.map)
                .bindPopup(`<b>${cityName}</b>`)
                .on("click", () => { //redirection to hotel search by city
                    this.router.navigate(['/hotel-by-location'], {
                        queryParams: {
                            town: cityName.toUpperCase(), 
                            autoSearch: true
                        }
                    });
                })
                .openPopup();
        })
        .addTo(this.map);

        const DefaultIcon = this.L.icon({
            iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
            shadowUrl: undefined,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        this.cities.forEach(city => {
            const marker = this.L.marker([city.lat, city.lon], { icon: DefaultIcon })
                .addTo(this.map)
                .bindPopup(`<b>${city.name}</b>`)
                .bindTooltip(city.name, { 
                    permanent: false,
                    direction: "top",
                    opacity: 0.8
                }) 
                .on("click", () => { // redirection to wikipedia page of the city selected 
                    window.open(city.wiki, "_blank");
                });

            this.cityMarkers.push(marker); 
        });
    }
}
