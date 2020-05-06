import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { BookListComponent } from '@app/screens/book-list/book-list.component';
import { BookDetailComponent } from '@app/screens/book-detail/book-detail.component';

import { AuthGuard } from '@app/guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '@app/token.interceptor';

import { BookService } from '@app/services/book.service';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'books', component: BookListComponent },
      { path: 'books/:id', component: BookDetailComponent }
    ]
  }
];

@NgModule({
  declarations: [BookDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AuthGuard,
    BookService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  exports: [BookDetailComponent]
})
export class AuthModule { }
