import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './services/local-storage.service';
import { UserService } from './services/user/user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private store: LocalStorageService, private userService: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.userService.isLoggedIn()) {
      let [accessToken, client, uid] = this.store.get('access-token', 'client', 'uid');
      request = request.clone({
        setHeaders: {
          'access-token': accessToken,
          client: client,
          uid: uid
        }
      })
    }
    return next.handle(request)
  }
}
