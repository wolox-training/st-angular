import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Book } from '@app/models/book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  count = 0;
  shoppingBooks$: Observable<Book[]>;

  constructor(private router: Router, private store: Store<{ shopping: Book[] }>) {
    this.shoppingBooks$ = store.pipe(select('shopping'));
  }

  ngOnInit(): void {
    this.store.source.subscribe(resp => {
      this.count = resp.shopping.length;
    });
  }

  logout () {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

}
