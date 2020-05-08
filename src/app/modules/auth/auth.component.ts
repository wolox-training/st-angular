import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '@app/services/local-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router, private store: LocalStorageService) { }

  ngOnInit(): void { }

  logout () {
    this.store.clear();
    this.router.navigateByUrl('/');
  }

}
