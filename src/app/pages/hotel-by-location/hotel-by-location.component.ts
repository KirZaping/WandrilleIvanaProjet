import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelDisplayerComponent } from '../../components/hotel-displayer/hotel-displayer.component';

@Component({
    selector: 'app-hotel-by-location',
    standalone: true,
    imports: [CommonModule, HotelDisplayerComponent],
    templateUrl: './hotel-by-location.component.html',
    styleUrl: './hotel-by-location.component.css'
})

export class HotelByLocationComponent {

}
