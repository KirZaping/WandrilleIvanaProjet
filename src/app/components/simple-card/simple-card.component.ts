import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Activite } from '../../interfaces/activities';
import { Hotel } from '../../interfaces/hotel';

@Component({
  selector: 'app-simple-card',
  imports: [CommonModule], 
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.css']
})
export class SimpleCardComponent{
    @Input() public main_title: string = '';
    @Input() public image: string = '';
    @Input() public card_title: string = '';
    @Input() public stars: number = 0;
    @Input() public site_web: string = '';
    @Input() public description: string = '';
    @Input() public price: number = 0;
    @Input() public town: string = '';
    @Input() public hotel: Hotel = {
        id: 0,
        name: '',
        stars: 0,
        description: '',
        price: 0,
        image: '',
    };
}
