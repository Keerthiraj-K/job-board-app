import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './register.html'
})
export class RegisterComponent {

  user = {
    name: '',
    email: '',
    password: '',
    role: 'JOB_SEEKER'
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register() {

    this.authService
      .register(this.user)
      .subscribe({
        next: () => {
            alert('Registration Successful');
            this.router.navigate(['/login']);
        },

        error: (err) => {

          console.error(err);

          alert('Registration Failed');
        }
      });
  }
}