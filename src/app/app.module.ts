import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AuthsLayoutComponent } from './auths-layout/auths-layout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CreateCatComponent } from './create-cat/create-cat.component';
import { AuthService } from './services/auth.service';
import { HttpService } from './services/http.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ListcatComponent } from './listcat/listcat.component';
import { ListCatsComponent } from './list-cats/list-cats.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    AuthsLayoutComponent,
    CreateCatComponent,
    ListcatComponent,
    ListCatsComponent,
    CatDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    AuthService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
