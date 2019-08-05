import { TestBed } from '@angular/core/testing';

import { RecipieService } from './recipie.service';

describe('RecipieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipieService = TestBed.get(RecipieService);
    expect(service).toBeTruthy();
  });
});
