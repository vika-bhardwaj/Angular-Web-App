import { TestBed, inject } from '@angular/core/testing';

import { SimilarWebsiteService } from './similar-website.service';

describe('SimilarWebsiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimilarWebsiteService]
    });
  });

  it('should be created', inject([SimilarWebsiteService], (service: SimilarWebsiteService) => {
    expect(service).toBeTruthy();
  }));
});
