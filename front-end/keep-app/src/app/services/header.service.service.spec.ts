import { TestBed } from '@angular/core/testing';

import { Header.ServiceService } from './header.service.service';

describe('Header.ServiceService', () => {
  let service: Header.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Header.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
