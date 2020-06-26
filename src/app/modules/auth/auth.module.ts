import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '@app/guards/auth.guard';
import { AuthRoutingModule } from './auth-routing.module';
import { BookService } from '@app/services/book.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '@app/token.interceptor';
import { BookDetailComponent } from '@app/screens/book-detail/book-detail.component';
import { ShoppingCartService } from '@app/services/shopping-cart.service';

@NgModule({
  declarations: [BookDetailComponent],
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
    },
    ShoppingCartService
  ],
  exports: [BookDetailComponent]
})
export class AuthModule { }
