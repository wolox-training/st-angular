import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from '@app/screens/book-list/book-list.component';
import { AuthGuard } from '@app/guards/auth.guard';
import { BookService } from '@app/services/book.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '@app/token.interceptor';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'books', component: BookListComponent }
    ]
  }
];

@NgModule({
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
  ]
})
export class AuthModule { }
