import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8080/api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(dataSend:any): Observable<any> {
    return this.http.post(baseUrl + '/signin', dataSend);
  }

  register(dataSend:any): Observable<any> {
    return this.http.post(baseUrl + '/signup', dataSend);
  }
  forget(email: string): Observable<any> {
    return this.http.post(baseUrl + '/forgot-password', email);
  }
  reset(password: string,token:string): Observable<any> {
    const params = new HttpParams().set('token', token);
    return this.http.put(baseUrl + '/reset-password', password,{params});
  }
  refreshToken(refreshToken:string): Observable<any> {
    return this.http.put(baseUrl + '/auth/refreshtoken', refreshToken);
  }
}
