import { TestBed, inject } from '@angular/core/testing';

import { RecupTacheService } from './recup-tache.service';

describe('RecupTacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecupTacheService]
    });
  });

  it('should be created', inject([RecupTacheService], (service: RecupTacheService) => {
    expect(service).toBeTruthy();
  }));
});
