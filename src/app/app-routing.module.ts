import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthsLayoutComponent } from './auths-layout/auths-layout.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component';
import { CreateCatComponent } from './create-cat/create-cat.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ListCatsComponent } from './list-cats/list-cats.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '', component: AuthsLayoutComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgotpassword', component: ForgotpasswordComponent },
    ]
  },
  { path:'create-cat', component:CreateCatComponent, canActivate:[AuthGuard]},
  { path:'cats', component:ListCatsComponent},
  {path:'cat/:id', component:CatDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
