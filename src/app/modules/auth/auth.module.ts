import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '@app/guards/auth.guard';
import { AuthRoutingModule } from './auth-routing.module';
@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  providers: [AuthGuard]
})
export class AuthModule { }
