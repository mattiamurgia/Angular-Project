import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../model/Card';
import { Subscribable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() dataCard!: Card;
  @Input() i!: number;
  @Input() cardCounter!: number;
  @Input() userCard!: string;
  @Output() cardIncrement: EventEmitter<any> = new EventEmitter<any>();

  triggerIncrement() {
    this.cardIncrement.emit();
  }
}
