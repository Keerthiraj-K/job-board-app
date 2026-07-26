import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Application {

  constructor(
    private http: HttpClient,
  ) {}

  applyJob(application: any) {

    return this.http.post(
      `${environment.apiUrl}/applications`,
      application
    );
  }

  getApplicationsByUser(userId: number) {

    return this.http.get(
      `${environment.apiUrl}/applications/user/${userId}`
    );
  }

  getApplicationsByJob(jobId: number) {

  return this.http.get(
    `${environment.apiUrl}/applications/job/${jobId}`
  );
}

hasApplied(userId: number, jobId: number) {

  return this.http.get<boolean>(
    `${environment.apiUrl}/applications/check?userId=${userId}&jobId=${jobId}`
  );
}
}