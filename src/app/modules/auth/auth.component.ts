import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from '@app/services/shopping-cart.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  count = 0;
  destroySubject$: Subject<void> = new Subject();

  constructor(private router: Router, private shoppingService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingService.shoppingBooks.pipe(takeUntil(this.destroySubject$)).subscribe(books => this.count = books.length);
  }

  logout () {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

  ngOnDestroy(): void {
    this.destroySubject$.next();
    this.destroySubject$.unsubscribe();
  }

}
