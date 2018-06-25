import { TestBed, inject } from '@angular/core/testing';

import { ReservationServiceService } from './reservation-service.service';

describe('ReservationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservationServiceService]
    });
  });

  it('should be created', inject([ReservationServiceService], (service: ReservationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
