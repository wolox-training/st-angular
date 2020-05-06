import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '@app/services/user.service';

@Injectable()
export class UnauthGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) {}

  canActivate() {
    if (this.userService.isLoggedIn()) {
      this.router.navigateByUrl('/books');
      return false;
    }
    return true;
  }
  
}
