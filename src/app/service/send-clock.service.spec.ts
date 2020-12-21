import { TestBed } from '@angular/core/testing';

import { SendClockService } from './send-clock.service';

describe('SendClockService', () => {
  let service: SendClockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendClockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
