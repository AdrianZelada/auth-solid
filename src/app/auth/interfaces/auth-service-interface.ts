import {Observable} from 'rxjs';
import {InjectionToken} from '@angular/core';

export interface AuthProviders {
  [key: string]: any;
}

export interface AuthLoginInterface {
  login(): Observable<any>
}

export interface AuthLogoutInterface {
  logout(): Observable<any>
}

export interface AuthServiceInterface  extends AuthLoginInterface, AuthLogoutInterface{}

export const AUTH_PROVIDERS = new InjectionToken<any>('Nebular Auth Providers');
