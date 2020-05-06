import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UnauthComponent } from './unauth.component';
import { LoginComponent } from '@app/screens/Authentication/components/Login/login.component';
import { SignupComponent } from '@app/screens/Authentication/components/Signup/signup.component';
import { UnauthGuard } from '@app/guards/unauth.guard';

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
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [UnauthGuard]
})
export class UnauthModule { }
