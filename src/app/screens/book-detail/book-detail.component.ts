import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '@app/services/book.service';
import { Book } from '@app/models/book';
import { BOOK } from './constants';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(private route: ActivatedRoute, private bookService: BookService) {
    this.book = BOOK;
  }

  ngOnInit(): void {
    this.bookService.getBook(this.route.snapshot.paramMap.get('id'))
      .subscribe(resp => { this.book = resp })
  }

  starredAuthor(name: string) {
    return name === 'Piers Anthony';
  }

}
