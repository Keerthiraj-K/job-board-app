import { Routes } from '@angular/router';


import { JobList } from './jobs/job-list/job-list';
import { CreateJob } from './jobs/create-job/create-job';
import { LoginComponent } from './auth/login/login';
import { RegisterComponent } from './auth/register/register';

export const routes: Routes = [
  { path: '', redirectTo: 'jobs', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },

  { path: 'jobs', component: JobList },

  { path: 'create-job', component: CreateJob }
];