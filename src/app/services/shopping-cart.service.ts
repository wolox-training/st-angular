import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './book';

@Injectable()
export class ShoppingCartService {

  private books = new BehaviorSubject([]);
  shoppingBooks = this.books.asObservable();

  constructor() {}

  addBokk (book: Book) {
    this.books.value.push(book);
    this.books.next(this.books.value);
  }

  itemscount (): number {
    return this.books.value.length;
  }
}
