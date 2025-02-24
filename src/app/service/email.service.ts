import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = environment.API_URL; // Ensure this is correct

  constructor(private http: HttpClient) {}

  sendEmail(data: any): Observable<any> { // Fixed function name
    console.log('Sending email:', data);
    console.log('API URL:', this.apiUrl);
    return this.http.post<any>(`${this.apiUrl}/send-email`, data).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error('Email Service Error:', errorMessage);
    return throwError(errorMessage);
  }
}
