import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '@app/services/book.service';
import { Book } from '@app/services/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(private route: ActivatedRoute, private bookService: BookService) {
    this.book = {
      id: 0,
      author: 'Autor del libro',
      title: 'Titulo del libro',
      image_url: 'imagen',
      editor: 'Editorial del libro',
      year: '2020',
      genre: 'genero'
    }
  }

  ngOnInit(): void {
    this.bookService.getBook(this.route.snapshot.paramMap.get('id'))
      .subscribe(resp => { this.book = resp })
  }

}
