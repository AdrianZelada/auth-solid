import { TestBed } from '@angular/core/testing';

import { AuthProvidersService } from './auth-providers.service';

describe('AuthProvidersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthProvidersService = TestBed.get(AuthProvidersService);
    expect(service).toBeTruthy();
  });
});
