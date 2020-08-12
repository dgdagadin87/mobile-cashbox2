import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

//import { EnvService } from './env.service';

export interface ApiResponse {
  success: boolean;
  result?: any;
  error?: boolean;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl;
  private siteUrl;

  constructor(
    //private env: EnvService,
    private http: HttpClient,
  ) {
  }

  getObservable(url = '', type: 'api' | 'site' = 'api', options = {}): Observable<ApiResponse> {
    const base = this.getBaseUrl(type);
    return this.http.get(
      base + '/' + url,
      { headers: new HttpHeaders(this.getHttpHeaders()), ...options, withCredentials: true }
    ).pipe(
      map((resultFromApi) => {
        return {
          success: true,
          result: resultFromApi
        };
      }),
      catchError(error => of({
          success: false,
          result: error
        }
      ))
    );
  }

  postObservable(url, type: 'api' | 'site' = 'api', requestData = {}): Observable<ApiResponse> {
    const base = this.getBaseUrl(type);
    return this.http.post(
      base + '/' + url,
      requestData,
      { headers: new HttpHeaders(this.getHttpHeaders()), withCredentials: true }
    ).pipe(
      map((resultFromApi) => {
        return {
          success: true,
          result: resultFromApi
        };
      }),
      catchError(error => of({
          success: false,
          result: error
        }
      ))
    );
  }

  putObservable(url, type: 'api' | 'site' = 'api', requestData = {}): Observable<ApiResponse> {
    const base = this.getBaseUrl(type);
    return this.http.put(
      base + '/' + url,
      requestData,
      { headers: new HttpHeaders(this.getHttpHeaders()), withCredentials: true }
    ).pipe(
      map((resultFromApi) => {
        return {
          success: true,
          result: resultFromApi
        };
      }),
      catchError(error => of({
          success: false,
          result: error
        }
      ))
    );
  }

  deleteObservable(url, type: 'api' | 'site' = 'api'): Observable<ApiResponse> {
    const base = this.getBaseUrl(type);
    return this.http.delete(
      base + '/' + url,
      { headers: new HttpHeaders(this.getHttpHeaders()), withCredentials: true }
    ).pipe(
      map((resultFromApi) => {
        return {
          success: true,
          result: resultFromApi
        };
      }),
      catchError(error => of({
          success: false,
          result: error
        }
      ))
    );
  }

  private getHttpHeaders() {
    return {};
  }

  private getBaseUrl(type: 'api' | 'site'): string {
    if (!this.apiUrl) {
      this.getApiUrl();
    }

    if (!this.siteUrl) {
      this.getSiteUrl();
    }

    if (type === 'site') {
      return this.siteUrl;
    } else {
      return this.apiUrl;
    }
  }

  private getApiUrl(): void {
    //this.apiUrl = this.env.apiUrl;
  }

  private getSiteUrl(): void {
    //this.siteUrl = this.env.siteUrl;
  }
}
