import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../interfaces/hotel';
import { SimpleCardComponent } from '../../components/simple-card/simple-card.component';
import { ActivatedRoute } from '@angular/router';
import { Activite } from '../../interfaces/activities';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary',
  imports: [SimpleCardComponent, CommonModule],
  standalone: true,
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent implements OnInit {
  public currentTown: string = 'Paris';
  
  public activities: string[] = [];
  public image: string = '/images/hotel-by-location/hotel/hotel-london.jpg';
  public title: string = 'hotel components super';
  public description: string = 'hotel super';
  public price: number = 100;

  public town_title: string = 'La ville de vos rêves';
  public hotel_title: string = 'L\'hôtel de vos rêves';
  public activity_title: string = 'Les activités de vos rêves';

  public town_title_card: string = 'Votre ville de rêve';
  public hotel_title_card: string = 'Votre hôtel de rêve';

  public town_image: string = '/images/home/voyages-cover/marseille.jpg';
  public hotel_image: string = '/images/hotel-by-location/hotel/hotel-london.jpg';
  public activity_image: string = '/images/home/voyages-cover/boat-cover.jpg';

  public town_description: string = 'Marseille est une ville de France située dans le sud du pays. Elle est connue pour ses plages, ses musées et ses quartiers animés.';
  public hotel_description: string = 'L\'hôtel de Londres est un hôtel de luxe situé à Londres. Il est connu pour ses chambres spacieuses et ses services de haute qualité.';

  public activities_list: any = [];
  public hotel: Hotel = {
    id: 0,
    name: '',
    stars: 0,
    description: '',
    price: 100,
    image: '/images/hotel-by-location/hotel/hotel-london.jpg'
  };

  public activityIsLoaded: boolean = false;
  public hotelIsLoaded: boolean = false;


  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const hotelId = this.route.snapshot.queryParamMap.get('hotel');
    if (hotelId) {
      this.fetchHotelDetails(Number(hotelId));
    }
  }

  public fetchActivities(town: string){
    fetch('/api/activities')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        data.forEach((element: any) => {
          if(element.Ville.toUpperCase() == town){
            this.activities_list.push(element);
          }
        }
      );
      this.activityIsLoaded = true;
      })
      .catch(error => {
        console.error('[>>>> SUMMARY] Erreur lors de la récupération des détails de l\'hôtel:', error);
      });
  }

  public fetchHotelDetails(id: number) {
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

        this.hotelIsLoaded = true;
        this.fetchActivities(data[id].COMMUNE);
      })
      .catch(error => {
        console.error('[>>>> SUMMARY] Erreur lors de la récupération des détails de l\'hôtel:', error);
      });
  }
}
