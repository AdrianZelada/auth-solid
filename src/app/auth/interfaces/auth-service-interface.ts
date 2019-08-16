import {Observable} from 'rxjs';
import {InjectionToken} from '@angular/core';
export interface AuthProviders {
  [key: string]: any;
}

export interface AuthLoginInterface {
  login(): Observable<any>;
}

export interface AuthLogoutInterface {
  logout(): Observable<any>;
}

export interface AuthProviderInterface {
  setProvider(name: string): void;
  getProvider<T extends AuthLoginInterface | AuthLogoutInterface>(): T ;
}

export interface AuthServiceInterface extends AuthLogoutInterface, AuthLoginInterface {}

export const AUTH_PROVIDERS = new InjectionToken<any>('Auth Providers');
