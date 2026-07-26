import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { JobService } from '../../services/job';
import { Application } from '../../services/application';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './job-details.html'
})
export class JobDetails implements OnInit {

  job: any;
  alreadyApplied = false;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private cdr: ChangeDetectorRef,
    private applicationService: Application,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.jobService
  .getJobById(id)
  .subscribe((data) => {

    this.job = data;

    const user = this.authService.getUser();

    if (user?.role === 'JOB_SEEKER') {

      this.applicationService
        .hasApplied(user.id, this.job.id)
        .subscribe((result: boolean) => {

          this.alreadyApplied = result;
        });
    }

    this.cdr.detectChanges();
  });
  }

  applyJob() {

  const application = {

    jobId: this.job.id,

    userId: this.user.id
  };

  this.applicationService
    .applyJob(application)
    .subscribe({
      next: () => {

        alert('Applied Successfully');
         this.alreadyApplied = true;
        this.router.navigate(['/jobs']);
      },

      error: (err) => {

  if (
     err.error &&
      err.error.message &&
      err.error.message.includes('already applied')
  ) {

    alert(
      'You have already applied for this job'
    );

  } else {

    alert('Application Failed');
  }
}
    });
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

    deleteJob() {

  if (!confirm('Delete this job?')) {
    return;
  }

  this.jobService
    .deleteJob(this.job.id)
    .subscribe({
      next: () => {

  alert('Job Deleted Successfully');

  if (this.user?.role === 'EMPLOYER') {

    this.router.navigate(['/employer-dashboard']);

  } else {

    this.router.navigate(['/jobs']);
  }
},

      error: (err) => {

        console.error(err);

        alert('Delete Failed');
      }
    });
}

get canDelete(): boolean {

  return this.isEmployer &&
         this.job?.employerId === this.user?.id;
}
}