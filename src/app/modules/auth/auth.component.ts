import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { removeBook } from '@app/store/book.actions';
import { Book } from '@app/models/book';
import { Observable } from 'rxjs';
import { LocalStorageService } from '@app/services/local-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  count = 0;
  shoppingBooks$: Observable<Book[]>;
  popUp = false;
  shoppingBooks: [];

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private store: Store<{ shopping: Book[] }>) {
    this.shoppingBooks$ = store.pipe(select('shopping'));
  }

  ngOnInit(): void {
    this.store.source.subscribe(resp => {
      this.shoppingBooks = resp.shopping
      this.count = resp.shopping.length;
    });
  }

  logout() {
    this.localStorageService.clear();
    this.router.navigateByUrl('/');
  }

  openPopUp() {
    this.popUp = true;
  }

  closePopUp(event) {
    this.popUp = event;
  }

  removeItem(index) {
    this.store.dispatch(removeBook({index}));
  }

}
