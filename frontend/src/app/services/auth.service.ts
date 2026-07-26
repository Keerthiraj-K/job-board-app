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

  isLoggedIn(): boolean {

  return !!localStorage.getItem('token');
}

getUser() {

  const user =
    localStorage.getItem('user');

  return user
    ? JSON.parse(user)
    : null;
}

logout() {

  localStorage.removeItem('token');
  localStorage.removeItem('user');
}
}