import { Routes } from '@angular/router';


import { JobList } from './jobs/job-list/job-list';
import { CreateJob } from './jobs/create-job/create-job';
import { LoginComponent } from './auth/login/login';
import { RegisterComponent } from './auth/register/register';
import { JobDetails } from './jobs/job-details/job-details';
import { MyApplications } from './applications/my-applications/my-applications';
import { EmployerDashboardComponent } from './employer/employer-dashboard/employer-dashboard';
import { JobApplicants } from './employer/job-applicants/job-applicants';

export const routes: Routes = [
  { path: '', redirectTo: 'jobs', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },

  { path: 'jobs', component: JobList },

  { path: 'create-job', component: CreateJob },

  { path: 'jobs/:id', component: JobDetails },

  { path: 'my-applications', component: MyApplications},

  { path: 'employer-dashboard', component: EmployerDashboardComponent},

  {  path: 'job-applicants/:jobId', component: JobApplicants }
];