package com.jobBoard.backend.service;

import com.jobBoard.backend.dto.ApplicantDto;
import com.jobBoard.backend.dto.AppliedJobs;
import com.jobBoard.backend.entity.Application;

import java.util.List;

public interface ApplicationService {

    Application applyJob(Application application);

    List<AppliedJobs> getApplicationsByUser(Long userId);

    List<Application> getApplicationsByJob(Long jobId);

    Boolean existsByUserIdAndJobId(Long userId, Long jobId);

    List<ApplicantDto> getApplicantsByJob(Long jobId);
}