import { Component, OnInit, inject } from '@angular/core';
import { serviceComunication } from 'src/app/service/comunicationService/serviceComunication.service';

@Component({
  selector: 'app-component1',

  templateUrl: './component1.component.html',

  styleUrls: ['./component1.component.scss'],
})
export class Component1Component implements OnInit {
  service = inject(serviceComunication);

  dataComponent1 = 'Component 1';

  ngOnInit(): void {
    console.log('ng');

    this.service.serviceData.next(this.dataComponent1);
  }
}
