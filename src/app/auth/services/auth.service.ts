import {Inject, Injectable, Injector, Optional} from '@angular/core';
import {AUTH_PROVIDERS, AuthLoginInterface, AuthLogoutInterface, AuthServiceInterface} from '../interfaces/auth-service-interface';
import {Observable} from 'rxjs';
import {AuthDummyService} from './auth-dummy.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthServiceInterface{

  protected nameProviders: string;
  constructor( protected injector: Injector,
               @Optional() @Inject(AUTH_PROVIDERS) protected providers = {}) {
    const keysProviders = Object.keys(this.providers);
    if(keysProviders.length > 0) {
      this.setProvider(keysProviders[0]);
    } else {
      this.providers = {
        default: AuthDummyService
      };
      this.setProvider('default');
    }
  }

  login(): Observable<any> {
    return this.getProvider<AuthLoginInterface>().login();
  }

  logout(): Observable<any> {
    return this.getProvider<AuthLogoutInterface>().logout();
  }

  setProvider(name: string) {
    if (!this.providers[name]) {
      throw new TypeError(`Nb auth provider '${name}' is not registered`);
    } else {
      this.nameProviders = name;
    }
  }

  private getProvider<T extends AuthLoginInterface | AuthLogoutInterface>(): T {
    if (!this.providers[this.nameProviders]) {
      throw new TypeError(`Nb auth provider '${name}' is not registered`);
    }

    return this.injector.get(this.providers[this.nameProviders]);
  }
}
