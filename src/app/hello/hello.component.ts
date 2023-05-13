import { Component } from '@angular/core';
import { User, UserDetailPipe } from './../pipe/user-detail.pipe';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent {
  users: User[] = [
    { name: 'mattia', surname: 'murgia', number: '9992020', city: 'haaja' },
    { name: 'hauaa', surname: 'hauaaH', number: '999202ss0', city: 'ssjsjs' },
    { name: 'marco', surname: 'djdj', number: '999202ss0', city: 'ssjsjs' },
    {
      name: 'filippo',
      surname: 'udddmdm',
      number: '999202ss0',
      city: 'ssjsjs',
    },
    { name: 'olexi', surname: 'dndnddjd', number: '999202ss0', city: 'ssjsjs' },
  ];
  constructor() {}
}
