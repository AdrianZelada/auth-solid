import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import { LayoutComponent } from './layout/layout.component';
import {AuthEmailPasswordService} from './service/auth-email-password.service';
import {AuthServiceInterface} from './auth/interfaces/auth-service-interface';
// import {AbstractAuthService} from './auth/interfaces/auth-service-interface';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      'email-password': AuthEmailPasswordService
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
