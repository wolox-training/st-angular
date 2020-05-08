import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthGuard } from '@app/guards/unauth.guard';
import { UnauthRoutingModule } from './unauth-routing.module.';

@NgModule({
  imports: [
    CommonModule,
    UnauthRoutingModule
  ],
  providers: [UnauthGuard]
})
export class UnauthModule { }
