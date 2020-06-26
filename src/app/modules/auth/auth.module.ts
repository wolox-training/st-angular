import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { AuthGuard } from '@app/guards/auth.guard';
import { AuthRoutingModule } from './auth-routing.module';
import { BookService } from '@app/services/book.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '@app/token.interceptor';
import { BookDetailComponent } from '@app/screens/book-detail/book-detail.component';
import * as shoppingCart from '@app/store/book.reducer'
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [BookDetailComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature('shopping', shoppingCart.reducer),
    TranslateModule
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
