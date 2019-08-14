import {Injector, ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthComponent } from './auth.component';
import {Route, RouterModule, Routes} from '@angular/router';
import {AUTH_PROVIDERS, AuthProviders} from './interfaces/auth-service-interface';
import {AuthService} from './services/auth.service';
import {AuthDummyService} from './services/auth-dummy.service';

const router: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];


export function authServiceFactory(config: AuthProviders, authDummyService: AuthDummyService, injector: Injector) {
  return new AuthService(injector, config);
}


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class AuthModule {
  static forRoot(authOptions?: AuthProviders): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: AuthModule,
      providers: [
        { provide: AUTH_PROVIDERS, useValue: authOptions },
        {
          provide: AuthService,
          useFactory: authServiceFactory,
          deps: [AUTH_PROVIDERS, AuthDummyService,Injector],
        },
        AuthDummyService
      ],
    };
  }
}
