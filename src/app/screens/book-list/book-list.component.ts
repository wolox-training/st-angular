import { Component, OnInit } from '@angular/core';
import { BookService } from '@app/services/book.service';
import { addBook } from '@app/store/book.actions';
import { Store, select } from '@ngrx/store';
import { Book } from '@app/models/book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books;
  filterValue = '';
  shoppingBooks$: Observable<Book[]>;

  constructor(private bookService: BookService, private store: Store<{ shopping: Book[] }>) {
      this.shoppingBooks$ = store.pipe(select('shopping'));
    }

  ngOnInit(): void {
    combineLatest(
      this.bookService.getBooks(),
      this.shoppingService.shoppingBooks
    ).subscribe(([{page}, books]) => {
      this.books = page;
      this.shoppingBooks = books
    });
  }

  addBookToCart (book) {
    this.shoppingService.addBokk(book);
  }

  addBookToCart (book) {
    this.store.dispatch(addBook({book}));
  }

}
