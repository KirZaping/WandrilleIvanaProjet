import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';  // Import de HttpClient
import { HttpClientModule } from '@angular/common/http';  // Import de HttpClientModule

interface Hotel {
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-hotel-displayer',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './hotel-displayer.component.html',
  styleUrls: ['./hotel-displayer.component.css']
})
export class HotelDisplayerComponent {
  currentTown: string = '';
  valeur_courante: string = ''; // Variable pour stocker la valeur de l'input
  locationTitle: string = 'hôtel à ' + this.currentTown;
  searchLocation: string = '';
  
  constructor(private http: HttpClient) {}

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.valeur_courante = inputElement.value; 
    this.updateCurrentTown();
  }

  updateCurrentTown() {
    this.currentTown = this.valeur_courante; 
    console.log('[>>>> HOTEL-DISPLAYER] Current town updated to:', this.currentTown);
    this.updateLocationTitle();
  }

  updateLocationTitle() {
    this.locationTitle = this.currentTown ? 'Hôtels à ' + this.currentTown : 'Rechercher un hôtel';
  }

  fetchHotels() {
    console.log('[>>>> HOTEL-DISPLAYER] 🏨 Fetching hotels...');
    fetch('/api/hotels')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Transformer la réponse en JSON
      })
      .then(data => {
        console.log('[>>>> HOTEL-DISPLAYER] Données des hôtels reçues de l\'API MirageJS :', data);
        this.selectedHotels = data.hotels; // Assuming the data structure has a hotels array
      })
      .catch(error => {
        console.error('[>>>> HOTEL-DISPLAYER] Erreur lors de la récupération des hôtels:', error);
      });
  }

  // Exemple de données d'hôtels
  hotels: Hotel[] = [
    {
      name: 'Hôtel de Paris',
      description: 'Un hôtel luxueux au cœur de Paris.',
      price: 200,
      image: '/images/hotel-by-location/hotel/hotel-louvres.jpg'
    },
    {
      name: 'Hôtel Montmartre',
      description: 'Un charmant hôtel avec vue sur la ville.',
      price: 150,
      image: '/images/hotel-by-location/hotel/hotel-london.jpg'
    },
    {
      name: 'Hôtel Eiffel',
      description: 'Proche de la Tour Eiffel, idéal pour les touristes.',
      price: 180,
      image: '/images/hotel-by-location/hotel/hotel-barcelona.jpg'
    },
    {
      name: 'Hôtel Saint-Germain',
      description: 'Un hôtel élégant dans le quartier Saint-Germain.',
      price: 220,
      image: '/images/hotel-by-location/hotel/hotel-barcelona.jpg'
    },
    {
      name: 'Hôtel Opéra',
      description: 'Idéalement situé près de l\'Opéra Garnier.',
      price: 190,
      image: '/images/hotel-by-location/hotel/hotel-louvres.jpg'
    },
    {
      name: 'Hôtel Champs-Élysées',
      description: 'Un hôtel de luxe sur les célèbres Champs-Élysées.',
      price: 300,
      image: '/images/hotel-by-location/hotel/hotel-london.jpg'
    },
    {
      name: 'Hôtel du Louvre',
      description: 'Un hôtel historique à proximité du musée du Louvre.',
      price: 250,
      image: '/images/hotel-by-location/hotel/hotel-louvres.jpg'
    },
    {
      name: 'Hôtel Bastille',
      description: 'Un hôtel moderne dans le quartier animé de Bastille.',
      price: 130,
      image: '/images/hotel-by-location/hotel/hotel-london.jpg'
    },
    {
      name: 'Hôtel de la Paix',
      description: 'Un hôtel tranquille avec un service exceptionnel.',
      price: 170,
      image: '/images/hotel-by-location/hotel/hotel-barcelona.jpg'
    },
    {
      name: 'Hôtel Montparnasse',
      description: 'Un hôtel confortable avec vue sur la Tour Montparnasse.',
      price: 160,
      image: '/images/hotel-by-location/hotel/hotel-louvres.jpg'
    }
  ];

  selectedHotels: any[] = this.hotels;
}
