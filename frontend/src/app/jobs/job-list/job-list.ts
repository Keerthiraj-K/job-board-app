import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobService } from '../../services/job';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './job-list.html',
})
export class JobList implements OnInit {

  jobs: any[] = [];

  constructor(
    private jobService: JobService,
    private cdr: ChangeDetectorRef,
    private router: Router
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