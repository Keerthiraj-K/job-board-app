import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobService } from '../../services/job';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employer-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './employer-dashboard.html'
})
export class EmployerDashboardComponent
implements OnInit {

  jobs: any[] = [];

  constructor(
    private jobService: JobService,
    private cdr: ChangeDetectorRef,
    private authService: AuthService
  ) {}

  ngOnInit(): void {

    const user = this.authService.getUser();

this.jobService
  .getEmployerJobs(user.id)
      .subscribe((data: any) => {

        this.jobs = data;
        this.cdr.detectChanges();
      });
  }
}