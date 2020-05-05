import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '@env/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = `${environment.apiUrl}/books`;

  constructor(private http: HttpClient) { }

  getBooks (): Observable<any> {
    return this.http.get<any>(
      this.apiUrl,
      ).pipe(
        catchError (error => throwError('Error with server'))
      )
  }
}
