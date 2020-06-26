import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './book';

@Injectable()
export class ShoppingCartService {

  private books = new BehaviorSubject([]);
  shoppingBooks = this.books.asObservable();

  constructor() {}

  addBokk (book: Book) {
    const books = [...this.books.value, {...book}];
    this.books.next(books);
  }

  itemscount (): number {
    return this.books.value.length;
  }
}
