import { Injectable } from '@angular/core';
import { AuthServiceInterface} from '../auth/interfaces/auth-service-interface';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthEmailPasswordService implements AuthServiceInterface {

  constructor() {
    // super();
  }

  login(): Observable<any> {
    return of('AuthEmailPasswordService login');
  }

  logout(): Observable<any> {
    return of('AuthEmailPasswordService logout');
  }
}
