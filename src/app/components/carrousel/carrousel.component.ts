import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Voyage } from '../../interfaces/voyage';


@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent {
  @Input() sectionTitle: string = '';
  @Input() id: string = '';
  @Input() voyages: Voyage[] = [];

}
