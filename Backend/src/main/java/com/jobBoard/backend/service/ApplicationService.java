package com.jobBoard.backend.service;

import com.jobBoard.backend.entity.Application;

import java.util.List;

public interface ApplicationService {

    Application applyJob(Application application);

    List<Application> getApplicationsByUser(Long userId);

    List<Application> getApplicationsByJob(Long jobId);
}