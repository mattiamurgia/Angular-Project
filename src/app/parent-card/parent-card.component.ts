import { Component } from '@angular/core';
import {Card} from './../model/Card'


@Component({
  selector: 'app-parent-card',
  templateUrl: './parent-card.component.html',
  styleUrls: ['./parent-card.component.scss']
})
export class ParentCardComponent {
dataCard: Card[] = [
    {
      img: 'https://picsum.photos/200/300',
      title: 'One',
      description: 'djwnwnjw',
    }, {
      img: 'https://picsum.photos/200/300',
      title: 'Two',
      description: 'lorembbekje',
    }, {
      img: 'https://picsum.photos/200/300',
      title: 'Three',
      description: 'ddjwjqqwkqw',
    }, {
      img: 'https://picsum.photos/200/300',
      title: 'Four',
      description: 'dwwkiwdwid',
    },
  ];
}
