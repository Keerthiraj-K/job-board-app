import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobService } from '../../services/job';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-list.html'
})
export class JobList implements OnInit {

  jobs: any[] = [];

  constructor(
    private jobService: JobService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.jobService
      .getAllJobs()
      .subscribe((data: any) => {

        console.log('JOBS DATA:', data);

        this.jobs = [...data];
        this.cdr.detectChanges();

        console.log('After assignment:', this.jobs);
      });
  }
}