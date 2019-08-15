// import {Observable} from 'rxjs';
// import {InjectionToken} from '@angular/core';
//
// type AbstractAuth<T> = T extends AbstractAuthService ? T : never;
//
// type ExcludeTypeKey<K> = K extends "type" ? never : K
//
//
// export interface AuthProviders {
//   [key: string]: AbstractAuthService;
// }
//
// export interface AuthLoginInterface {
//   login(): Observable<any>;
// }
//
// export interface AuthLogoutInterface {
//   logout(): Observable<any>;
// }
//
// export interface AuthProviderInterface {
//   setProvider(name: string): void;
//   getProvider<T extends AuthLoginInterface | AuthLogoutInterface>(): T ;
// }
//
// export interface AuthServiceInterface  extends AuthLoginInterface, AuthLogoutInterface{}
//
// export abstract class AbstractAuthService implements AuthLoginInterface, AuthLogoutInterface {
//
//   abstract login(): Observable<any>;
//   // login(): Observable<any> {
//   //   return undefined;
//   // }
//   abstract logout(): Observable<any>;
//
//   // logout(): Observable<any> {
//   //   return undefined;
//   // }
// }
// export const AUTH_PROVIDERS = new InjectionToken<AuthProviders>('Auth Providers');


import {Observable} from 'rxjs';
import {InjectionToken} from '@angular/core';

export interface AuthProviders {
  [key: string]: AuthServiceInterface;
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
