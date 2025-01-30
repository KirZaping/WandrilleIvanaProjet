import { Component } from '@angular/core';
import { CarrouselComponent } from '../../components/carrousel/carrousel.component';
import { CardSetComponent } from '../../components/card-set/card-set.component';
import { Voyage } from '../../interfaces/voyage';

@Component({
    selector: 'app-home',
    standalone:true,
    imports: [CarrouselComponent, CardSetComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    voyagesVogues: Voyage[] = [
        { id: 1, title: 'Paris', description: 'La ville lumière, célèbre pour sa culture et sa gastronomie.', image: '/images/home/voyages-cover/paris.jpg', link: '/hotel-by-location?town=Paris' },
        { id: 2, title: 'Marseille', description: 'Une ville portuaire dynamique, connue pour ses plages et sa cuisine méditerranéenne.', image: '/images/home/voyages-cover/marseille.jpg', link: '/hotel-by-location?town=Marseille' },
        { id: 3, title: 'Aix-en-provence', description: 'Charmante ville provençale, réputée pour ses marchés et son art.', image: '/images/home/voyages-cover/aix-en-provence.jpg', link: '/hotel-by-location?town=Aix-en-provence' }
    ];

    voyagesPrix: Voyage[] = [
        { id: 1, title: 'Le Mans', description: 'Célèbre pour sa course automobile, la ville offre également un riche patrimoine historique.', image: '/images/home/voyages-cover/le-mans.jpg', link: '/hotel-by-location?town=Le Mans' },
        { id: 2, title: 'La Rochelle', description: 'Une belle ville côtière avec un vieux port pittoresque et des plages.', image: '/images/home/voyages-cover/la-rochelle.jpg', link: '/hotel-by-location?town=La Rochelle' },
        { id: 3, title: 'Granville', description: 'Connue pour ses plages et son festival de la mer, Granville est une destination agréable.', image: '/images/home/voyages-cover/granville.jpg', link: '/hotel-by-location?town=Granville' }
    ];
}