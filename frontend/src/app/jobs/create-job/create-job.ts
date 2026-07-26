import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { JobService } from '../../services/job';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-create-job',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-job.html'
})
export class CreateJob implements OnInit {

  job = {
    title: '',
    company: '',
    location: '',
    description: '',
    skills: '',
    employerId: 0
  };

  constructor(
    private jobService: JobService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {

  const user = this.authService.getUser();

  if (!user || user.role !== 'EMPLOYER') {

    this.router.navigate(['/jobs']);
  }
}

  createJob() {

  const user = this.authService.getUser();

  this.job.employerId = user.id;

  this.jobService
    .createJob(this.job)
    .subscribe({
      next: () => {

        alert('Job Posted Successfully');

        this.router.navigate([
          '/employer-dashboard'
        ]);
      },

      error: (err) => {

        console.error(err);

        alert('Failed to create job');
      }
    });
}
}