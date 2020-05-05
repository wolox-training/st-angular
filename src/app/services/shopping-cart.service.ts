import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './book';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private books = new BehaviorSubject(JSON.parse(this.localStorage.get('shoppingBooks')) || []);
  shoppingBooks = this.books.asObservable();

  constructor(private localStorage: LocalStorageService) { }

  addBokk (book: Book) {
    this.books.value.push(book);
    this.books.next(this.books.value);
    this.localStorage.save('shoppingBooks', JSON.stringify(this.books.value));
  }

  itemscount (): number {
    return this.books.value.length;
  }
}
