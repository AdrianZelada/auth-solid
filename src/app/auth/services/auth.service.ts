import { Injectable } from '@angular/core';
import { AuthLoginInterface, AuthLogoutInterface, AuthServiceInterface} from '../interfaces/auth-service-interface';
import { Observable } from 'rxjs';
import { AuthProvidersService } from './auth-providers.service';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthServiceInterface {

  constructor( private authProvidersService: AuthProvidersService) {}

  login(): Observable<any> {
    return this
      .authProvidersService
      .getProvider<AuthLoginInterface>()
      .login()
      .pipe(
        tap((data) => {
          console.log('AuthService AuthModulo Interceptor');
          console.log(data);
        })
      );
  }

  logout(): Observable<any> {
    return this.authProvidersService.getProvider<AuthLogoutInterface>().logout();
  }
}
