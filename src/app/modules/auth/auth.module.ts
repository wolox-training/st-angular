import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from '@app/screens/book-list/book-list.component';


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
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
