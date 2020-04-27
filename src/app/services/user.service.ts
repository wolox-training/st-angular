import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from './user';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) { }


  createUser (user: User): Observable<User> {
    return this.http.post<any>(
      this.apiUrl, user
      ).pipe(catchError ( error => throwError('User nor registered')))
  }

  getUser (userId: number): Observable<User> {
    return this.http.get(
      `${this.apiUrl}/${userId}`,
      ).pipe(
        map((data: User) => data),
        catchError ( error => throwError('User not found!'))
      )
  }
}
