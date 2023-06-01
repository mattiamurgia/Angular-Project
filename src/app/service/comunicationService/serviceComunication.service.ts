import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class serviceComunication {
  constructor() {}

  serviceData = new BehaviorSubject<string>('');
}
