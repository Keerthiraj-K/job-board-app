import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  register(user: any) {
    return this.http.post(
      `${environment.apiUrl}/auth/register`,
      user
    );
  }

  login(credentials: any) {
    return this.http.post(
      `${environment.apiUrl}/auth/login`,
      credentials
    );
  }
}