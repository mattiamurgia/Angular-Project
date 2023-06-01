import { Component, Pipe } from '@angular/core';
import { Card } from './../model/Card';
import { ApicrudService } from '../service/apicrud/apicrud.service';
import { User } from '../model/User';

@Component({
  selector: 'app-parent-card',
  templateUrl: './parent-card.component.html',
  styleUrls: ['./parent-card.component.scss'],
})
export class ParentCardComponent {
  constructor(private userService: ApicrudService) {}

  userParent!: string;

  test = this.userService.getUser().subscribe((data) =>
    Object.values(data).map((item) => {
      this.userParent = item.name;
    })
  );

  parentCounter: number = 0;

  parentIncrement() {
    return this.parentCounter++;
  }

  dataCard: Card[] = [
    {
      img: 'https://picsum.photos/200/300',
      title: 'One',
      description: 'djwnwnjw',
    },
    {
      img: 'https://picsum.photos/200/300',
      title: 'Two',
      description: 'lorembbekje',
    },
    {
      img: 'https://picsum.photos/200/300',
      title: 'Three',
      description: 'ddjwjqqwkqw',
    },
    {
      img: 'https://picsum.photos/200/300',
      title: 'Four',
      description: 'dwwkiwdwid',
    },
  ];
}
