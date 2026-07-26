import { Component } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  Router
} from '@angular/router';

import { AuthService }
from './services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  showMenu = false;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  logout() {
    this.showMenu = false;

    this.authService.logout();

    this.router.navigate(['/login']);
  }

  get user() {

    return this.authService.getUser();
  }

  get isEmployer(): boolean {

  return this.user?.role === 'EMPLOYER';
}

get isJobSeeker(): boolean {

  return this.user?.role === 'JOB_SEEKER';
}

goHome() {

  if (!this.authService.isLoggedIn()) {
    this.router.navigate(['/jobs']);
    return;
  }

  const user = this.authService.getUser();

  if (user?.role === 'EMPLOYER') {
    this.router.navigate(['/employer-dashboard']);
  } else {
    this.router.navigate(['/jobs']);
  }
}
}