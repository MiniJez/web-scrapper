import { TestBed } from '@angular/core/testing';

import { ScraperboxService } from './scraperbox.service';

describe('ScraperboxService', () => {
  let service: ScraperboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScraperboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
