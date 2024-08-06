import { TestBed } from '@angular/core/testing';

import { AboserviceService } from './aboservice.service';

describe('AboserviceService', () => {
  let service: AboserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
