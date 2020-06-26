import { Component, OnInit } from '@angular/core';
import { BookService } from '@app/services/book.service';
import { ShoppingCartService } from '@app/services/shopping-cart.service';
import { forkJoin, combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books;
  filterValue = '';
  shoppingBooks;

  constructor(private bookService: BookService, private shoppingService: ShoppingCartService) { }

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

}
