import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnauthComponent } from './unauth.component';
import { LoginComponent } from '@app/screens/Authentication/components/Login/login.component';
import { SignupComponent } from '@app/screens/Authentication/components/Signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: UnauthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'sign-up', component: SignupComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnauthRoutingModule {}
