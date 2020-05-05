import { Component, OnInit } from '@angular/core';
import { BookService } from '@app/services/book.service';
import { ShoppingCartService } from '@app/services/shopping-cart.service';

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
    this.bookService.getBooks()
      .subscribe(({page}) => this.books = page)
      this.shoppingService.shoppingBooks.subscribe(books => this.shoppingBooks = books);
  }

  addBookToCart (book) {
    this.shoppingService.addBokk(book);
  }

}
