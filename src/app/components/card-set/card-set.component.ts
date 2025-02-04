import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-set',
  imports: [CommonModule],
  templateUrl: './card-set.component.html',
  styleUrls: ['./card-set.component.css']
})
export class CardSetComponent {
  @Input() public title: string = '';
  
  // Liste des images des cartes
  public cards: string[] = [
    '/images/home/voyages-cover/voyage1.HEIC',
    '/images/home/voyages-cover/voyage2.HEIC',
    '/images/home/voyages-cover/voyage3.HEIC',
    '/images/home/voyages-cover/voyage4.HEIC',
    '/images/home/voyages-cover/voyage5.HEIC',
    '/images/home/voyages-cover/voyage6.jpg',
    '/images/home/voyages-cover/voyage7.HEIC',
    '/images/home/voyages-cover/voyage8.HEIC',
    '/images/home/voyages-cover/voyage9.HEIC',
    '/images/home/voyages-cover/voyage10.HEIC',
    '/images/home/voyages-cover/voyage11.HEIC',
    '/images/home/voyages-cover/voyage12.HEIC',
    '/images/home/voyages-cover/voyage13.JPG',
    '/images/home/voyages-cover/voyage14.HEIC',
    '/images/home/voyages-cover/voyage15.jpg',
    '/images/home/voyages-cover/voyage16.jpg',
    '/images/home/voyages-cover/voyage17.HEIC',
    '/images/home/voyages-cover/voyage18.HEIC',
    '/images/home/voyages-cover/voyage19.HEIC',
    '/images/home/voyages-cover/voyage20.HEIC',
    '/images/home/voyages-cover/voyage21.HEIC',
    '/images/home/voyages-cover/voyage22.HEIC',
    '/images/home/voyages-cover/voyage10.HEIC',
    '/images/home/voyages-cover/voyage11.HEIC'
  ];
}
