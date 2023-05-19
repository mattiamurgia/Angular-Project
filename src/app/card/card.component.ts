import { Component, Input } from '@angular/core';
import { Card } from '../model/Card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent
{
  @Input() dataCard!: Card;
  @Input() i!: number;
}
