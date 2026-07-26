import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Application }from '../../services/application';

@Component({
  selector: 'app-job-applicants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-applicants.html'
})
export class JobApplicants implements OnInit {

  applications: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private applicationService: Application,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    const jobId = Number(
      this.route.snapshot.paramMap.get('jobId')
    );

    this.applicationService
      .getApplicationsByJob(jobId)
      .subscribe((data: any) => {

        this.applications = data;

        this.cdr.detectChanges();
      });
  }
}