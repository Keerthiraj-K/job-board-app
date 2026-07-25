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

  login() {

    this.authService
      .login(this.credentials)
      .subscribe({
        next: (res: any) => {

  localStorage.setItem(
    'token',
    res.token
  );

  this.router.navigate(['/jobs']);
},

        error: (err) => {

          console.error(err);

          alert('Login Failed');
        }
      });
  }
}