import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '@env/environment';
import { catchError } from 'rxjs/operators';

<<<<<<< HEAD
@Injectable()
=======
@Injectable({
  providedIn: 'root'
})
>>>>>>> Add book service, add token interceptor
export class BookService {
  private apiUrl = `${environment.apiUrl}/books`;

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  getBooks(): Observable<any> {
=======
  getBooks (): Observable<any> {
>>>>>>> Add book service, add token interceptor
    return this.http.get<any>(
      this.apiUrl,
      ).pipe(
        catchError (error => throwError('Error with server'))
      )
  }

  getBook (id: string): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/${id}`
    ).pipe(
      catchError (error => throwError('Book not foun'))
    )
  }
}
