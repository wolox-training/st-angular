import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '@app/guards/auth.guard';
import { AuthRoutingModule } from './auth-routing.module';
import { BookService } from '@app/services/book.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '@app/token.interceptor';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  providers: [
    AuthGuard,
    BookService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class AuthModule { }
