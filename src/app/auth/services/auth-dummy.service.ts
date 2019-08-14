import { Injectable } from '@angular/core';
import {AuthServiceInterface} from '../interfaces/auth-service-interface';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthDummyService implements AuthServiceInterface{

  constructor() { }

  login(): Observable<any> {
    return of('Dummy Login');
  }

  logout(): Observable<any> {
    return of('Dummy Logout');
  }
}
