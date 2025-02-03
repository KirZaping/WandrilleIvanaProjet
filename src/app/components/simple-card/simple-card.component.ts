import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-card',
  imports: [],
  templateUrl: './simple-card.component.html',
  styleUrl: './simple-card.component.css'
})
export class SimpleCardComponent {
    @Input() main_title: string = '';
    @Input() image: string = '';
    @Input() card_title: string = '';
    @Input() stars: number = 0;
    @Input() site_web: string = '';
    @Input() description: string = '';
    @Input() price: number = 0;

  public logCardDetails(): void {
    console.log('Détails de la carte :');
    console.log('Titre principal:', this.main_title);
    console.log('Image:', this.image);
    console.log('Titre de la carte:', this.card_title);
    console.log('Étoiles:', this.stars);
    console.log('Site web:', this.site_web);
    console.log('Description:', this.description);
    console.log('Prix:', this.price);
  }
}
