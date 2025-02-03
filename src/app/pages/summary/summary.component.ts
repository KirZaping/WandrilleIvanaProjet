import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../interfaces/hotel';
import { SimpleCardComponent } from '../../components/simple-card/simple-card.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary',
  imports: [SimpleCardComponent],
  standalone: true,
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent implements OnInit {
  currentTown: string = 'helsinki';
  hotel: Hotel = {
    id: 0,
    name: 'hotel super',
    stars: 3,
    description: 'hotel super',
    price: 100,
    image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
  };
  activities: string[] = [];
  image: string = '/images/hotel-by-location/hotel/hotel-london.jpg';
  title: string = 'hotel components super';
  description: string = 'hotel super';
  price: number = 100;

  town_title: string = 'La ville de vos rêves';
  hotel_title: string = 'L\'hôtel de vos rêves';
  activity_title: string = 'Les activités de vos rêves';

  town_title_card: string = 'Votre ville de rêve';
  hotel_title_card: string = 'Votre hôtel de rêve';
  activity_title_card: string = 'Vos activités de rêve';

  town_image: string = '/images/home/voyages-cover/marseille.jpg';
  hotel_image: string = '/images/hotel-by-location/hotel/hotel-london.jpg';
  activity_image: string = '/images/home/voyages-cover/boat-cover.jpg';

  town_description: string = 'Marseille est une ville de France située dans le sud du pays. Elle est connue pour ses plages, ses musées et ses quartiers animés.';
  hotel_description: string = 'L\'hôtel de Londres est un hôtel de luxe situé à Londres. Il est connu pour ses chambres spacieuses et ses services de haute qualité.';
  activity_description: string = 'Les activités de Marseille sont nombreuses. Vous pouvez faire de la plongée, de la randonnée, du shopping et bien plus encore.';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const hotelId = this.route.snapshot.queryParamMap.get('hotel');
    if (hotelId) {
      this.fetchHotelDetails(Number(hotelId));
    }
  }

  fetchHotelDetails(id: number) {
    fetch('/api/hotels')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.hotel.description = data[id].SITE_INTERNET;
        this.hotel.image = this.hotel_image;
        this.hotel.name = data[id].NOM_COMMERCIAL;
        this.hotel.price = data[id].PRIX;
        this.hotel.stars = data[id].CLASSEMENT;
        this.hotel.id = id;
        this.town_title_card = data[id].COMMUNE;
        console.log('[>>>> SUMMARY] 🏨 Fetching hotel details with id:', id, this.hotel);
      })
      .catch(error => {
        console.error('[>>>> SUMMARY] Erreur lors de la récupération des détails de l\'hôtel:', error);
      });
  }
}
