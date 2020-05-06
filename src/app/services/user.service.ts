import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from './user';
import { environment } from '@env/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) { }

  createUser (user: User): Observable<User> {
    return this.http.post<any>(
      this.apiUrl, user
      ).pipe(catchError (error => throwError('User is already registered')))
  }

  getUser (userId: number): Observable<User> {
    return this.http.get<User>(
      `${this.apiUrl}/${userId}`,
      ).pipe(
        catchError (error => throwError('User not found!'))
      )
  }

  login (loginData: Object): Observable<HttpResponse<any>> {
    return this.http.post<any>(
      `${this.apiUrl}/sign_in`, loginData, { observe: 'response' }
    ).pipe(
      catchError (error => throwError('Email or password was wrong'))
    )
  }
}
