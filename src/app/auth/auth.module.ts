import { Injector, ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes} from '@angular/router';
import { AUTH_PROVIDERS, AuthProviders} from './interfaces/auth-service-interface';
import { AuthDummyService} from './services/auth-dummy.service';
import { AuthProvidersService} from './services/auth-providers.service';

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


export function authServiceFactory(config: AuthProviders, injector: Injector) {
  return new AuthProvidersService(injector, config);
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
          provide: AuthProvidersService,
          useFactory: authServiceFactory,
          deps: [AUTH_PROVIDERS, Injector],
        },
        AuthDummyService
      ],
    };
  }
}
