import { Component } from '@angular/core';
import { CarrouselComponent } from '../../components/carrousel/carrousel.component';
import { CardSetComponent } from '../../components/card-set/card-set.component';

@Component({
    selector: 'app-home',
    standalone:true,
    imports: [CarrouselComponent, CardSetComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
