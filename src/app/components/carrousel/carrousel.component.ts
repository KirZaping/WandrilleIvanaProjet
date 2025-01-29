import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  imports: [],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent {
  @Input() sectionTitle: string = '';
  @Input() id: string = '';
}
