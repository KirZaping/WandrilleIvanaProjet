import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-set',
  imports: [CommonModule],
  templateUrl: './card-set.component.html',
  styleUrls: ['./card-set.component.css']
})
export class CardSetComponent {
  @Input() title: string = '';
  
  // Liste des images des cartes
  cards: string[] = [
    '/images/home/voyages-cover/beach-cover.jpg',
    '/images/home/voyages-cover/mountain-cover.jpg',
    '/images/home/voyages-cover/cliff-cover.jpg',
    '/images/home/voyages-cover/lake-cover.jpg',
    '/images/home/voyages-cover/beach-cover.jpg',
    '/images/home/voyages-cover/mountain-cover.jpg',
    '/images/home/voyages-cover/cliff-cover.jpg',
    '/images/home/voyages-cover/lake-cover.jpg'
  ];
}
