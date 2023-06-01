import { Component, OnInit, inject } from '@angular/core';
import { serviceComunication } from 'src/app/service/comunicationService/serviceComunication.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss'],
})
export class Component2Component implements OnInit {
  service = inject(serviceComunication);
  dataComponent2!: string;

  ngOnInit(): void {
    this.service.serviceData.subscribe((value) => {
      this.dataComponent2 = value;
    });
  }
}
