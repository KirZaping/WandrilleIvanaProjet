import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Hotel {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  stars: number;
}

@Component({
  selector: 'app-hotel-displayer',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './hotel-displayer.component.html',
  styleUrls: ['./hotel-displayer.component.css']
})
export class HotelDisplayerComponent implements OnInit {
  currentTown: string = '';
  valeur_courante: string = '';
  locationTitle: string = 'hôtel à ' + this.currentTown;
  searchLocation: string = '';
  selectedHotels: Hotel[] = [];
  hotels: any[] = [];
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.currentTown = params['town'] || '';
      this.updateLocationTitle();
    });
  }

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.valeur_courante = inputElement.value; 
    this.updateCurrentTown();
  }

  updateCurrentTown() {
    this.currentTown = this.valeur_courante.toUpperCase(); 
    console.log('[>>>> HOTEL-DISPLAYER] Current town updated to:', this.currentTown);
    this.updateLocationTitle();
  }

  updateLocationTitle() {
    this.locationTitle = this.currentTown ? 'Hôtels à ' + this.currentTown : 'Rechercher un hôtel';
  }

  searchCurrentTown(event: Event) {
    event.preventDefault();
    this.updateCurrentTown();
    this.fetchHotels(this.currentTown);
  }

  fetchHotels(town: string) {
    console.log('[>>>> HOTEL-DISPLAYER] 🏨 Fetching hotels ...');
    fetch('/api/hotels')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.hotels = data;
        console.log('[>>>> HOTEL-DISPLAYER (all)] Données des hôtels reçues de l\'API MirageJS :', this.hotels);
        this.selectHotels(this.currentTown);
      })
      .catch(error => {
        console.error('[>>>> HOTEL-DISPLAYER] Erreur lors de la récupération des hôtels:', error);
      });
  }

  goToHotelDetails(id: number) {
    console.log('[>>>> HOTEL-DISPLAYER] 🏨 Going to hotel details with id:', id, this.hotels[id]);
  }

  selectHotels(town: string) {
    let filteredHotels: Hotel[] = [];
    console.log('[>>>> HOTEL-DISPLAYER] 🏨 Fetching hotels at ' + town + '...');
    for (let i = 0; i < this.hotels.length; i++) {
        if (this.hotels[i].COMMUNE === town) {
            let tmpHotel: Hotel = {
                id: i,
                description: this.hotels[i].SITE_INTERNET,
                price: this.hotels[i].PRIX,
                image: "/images/hotel-by-location/hotel/hotel-london.jpg",
                name: this.hotels[i].NOM_COMMERCIAL,
                stars: parseInt(this.hotels[i].CLASSEMENT)
            };
            filteredHotels.push(tmpHotel);
        }
    }
    console.log('[>>>> HOTEL-DISPLAYER] 🏨 Fetching hotels at ' + town + ' is done');
    this.selectedHotels = filteredHotels;
  }

  showMoreHotels() {
    console.log('[>>>> HOTEL-DISPLAYER] 🏨 Showing more hotels...');
  }
}
