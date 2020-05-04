import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '@app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) { }

  canActivate() {
    if (this.userService.isLoggedIn()) return true;
    this.router.navigateByUrl('/login');
    return false;
  }
  
}
