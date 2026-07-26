import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Application } from '../../services/application';
import { AuthService } from '../../services/auth.service';
import { JobService } from '../../services/job';

@Component({
  selector: 'app-my-applications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-applications.html'
})
export class MyApplications implements OnInit {

  applications: any[] = [];
  appliedJobs: any[] = [];

  constructor(
    private applicationService: Application,
    private cdr: ChangeDetectorRef,
    private authService: AuthService,
    private jobService: JobService
  ) {}

  ngOnInit(): void {

  const user = this.authService.getUser();

  this.applicationService
    .getApplicationsByUser(user.id)
    .subscribe((data: any) => {

      this.appliedJobs = data;

      this.cdr.detectChanges();
    });
}
}