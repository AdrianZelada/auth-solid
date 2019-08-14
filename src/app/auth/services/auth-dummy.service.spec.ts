import { TestBed } from '@angular/core/testing';

import { AuthDummyService } from './auth-dummy.service';

describe('AuthDummyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthDummyService = TestBed.get(AuthDummyService);
    expect(service).toBeTruthy();
  });
});
