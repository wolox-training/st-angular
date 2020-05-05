import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { BookListComponent } from '@app/screens/book-list/book-list.component';
import { BookDetailComponent } from '@app/screens/book-detail/book-detail.component';

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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
