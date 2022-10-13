import { TestBed } from '@angular/core/testing';

import { PokemonServiceService } from './pokemon-service.service';

describe('PokemonServiceService', () => {
  let service: PokemonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
