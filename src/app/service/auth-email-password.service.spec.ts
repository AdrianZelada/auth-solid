import { TestBed } from '@angular/core/testing';

import { AuthEmailPasswordService } from './auth-email-password.service';

describe('AuthEmailPasswordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthEmailPasswordService = TestBed.get(AuthEmailPasswordService);
    expect(service).toBeTruthy();
  });
});
