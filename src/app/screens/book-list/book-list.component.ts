import { Component, OnInit, AfterContentInit } from '@angular/core';
import { BookService } from '@app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks()
      .subscribe(resp => {
        this.books = resp.page;
      })
  }

}