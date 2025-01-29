import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Hotel {
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
    selector: 'app-hotel-by-location',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './hotel-by-location.component.html',
    styleUrl: './hotel-by-location.component.css'
})
export class HotelByLocationComponent {
  locationTitle: string = 'Hôtels à Paris'; // Titre du lieu
  searchLocation: string = ''; // Lieu recherché

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
      description: 'Idéalement situé près de l’Opéra Garnier.',
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
}
