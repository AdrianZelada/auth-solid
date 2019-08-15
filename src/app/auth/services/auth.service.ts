import { Injectable } from '@angular/core';
import { AuthLoginInterface, AuthLogoutInterface, AuthServiceInterface} from '../interfaces/auth-service-interface';
import { Observable } from 'rxjs';
import { AuthProvidersService } from './auth-providers.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthServiceInterface {

  constructor( private authProvidersService: AuthProvidersService) {
    // super();
  }

  login(): Observable<any> {
    return this.authProvidersService.getProvider<AuthLoginInterface>().login();
  }

  logout(): Observable<any> {
    return this.authProvidersService.getProvider<AuthLogoutInterface>().logout();
  }
}
