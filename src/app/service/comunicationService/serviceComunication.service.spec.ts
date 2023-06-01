import { TestBed } from '@angular/core/testing';

import { serviceComunication } from './serviceComunication.service';

describe('serviceComunication', () => {
  let service: serviceComunication;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(serviceComunication);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
