import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from '@app/services/shopping-cart.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  count = 0;

  constructor(private router: Router, private shoppingService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingService.shoppingBooks.subscribe(books => this.count = books.length);
  }

  logout () {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

}
