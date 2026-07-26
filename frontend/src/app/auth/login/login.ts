import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.html'
})
export class LoginComponent {

  credentials = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {

  if (localStorage.getItem('token')) {

    const user = JSON.parse(
      localStorage.getItem('user')!
    );

    if (user.role === 'EMPLOYER') {

      this.router.navigate([
        '/employer-dashboard'
      ]);

    } else {

      this.router.navigate([
        '/jobs'
      ]);

    }
  }
}

  login() {

    this.authService
      .login(this.credentials)
      .subscribe({
        next: (res: any) => {

  localStorage.setItem(
    'token',
    res.token
  );

  localStorage.setItem(
    'user',
    JSON.stringify(res)
  );

  if (res.role === 'EMPLOYER') {

    this.router.navigate([
      '/employer-dashboard'
    ]);

  } else {

    this.router.navigate([
      '/jobs'
    ]);

  }
},

        error: (err) => {

          console.error(err);

          alert('Login Failed');
        }
      });
  }
}