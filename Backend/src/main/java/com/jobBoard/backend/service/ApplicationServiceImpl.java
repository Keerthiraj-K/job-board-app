package com.jobBoard.backend.service;

import com.jobBoard.backend.dto.ApplicantDto;
import com.jobBoard.backend.dto.AppliedJobs;
import com.jobBoard.backend.entity.Application;
import com.jobBoard.backend.entity.Job;
import com.jobBoard.backend.entity.User;
import com.jobBoard.backend.repository.ApplicationRepository;
import com.jobBoard.backend.repository.JobRepository;
import com.jobBoard.backend.repository.UserRepository;
import com.jobBoard.backend.service.ApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ApplicationServiceImpl
        implements ApplicationService {

    private final ApplicationRepository applicationRepository;

    private final JobRepository jobRepository;

    private final UserRepository userRepository;

    @Override
    public Application applyJob(Application application) {

        boolean alreadyApplied =
                applicationRepository.existsByUserIdAndJobId(
                        application.getUserId(),application.getJobId());

        if (alreadyApplied) {
            throw new RuntimeException(
                    "You have already applied for this job");
        }

        application.setStatus("APPLIED");

        return applicationRepository.save(application);
    }

    @Override
    public List<AppliedJobs> getApplicationsByUser(
            Long userId) {

        List<Application> applications =
                applicationRepository
                        .findByUserId(userId);

        List<AppliedJobs> result =
                new ArrayList<>();

        for (Application app : applications) {

            Job job =
                    jobRepository
                            .findById(app.getJobId())
                            .orElseThrow();

            AppliedJobs dto = new AppliedJobs();

            dto.setApplicationId(app.getId());
            dto.setJobId(job.getId());
            dto.setTitle(job.getTitle());
            dto.setCompany(job.getCompany());
            dto.setLocation(job.getLocation());
            dto.setDescription(job.getDescription());
            dto.setStatus(app.getStatus());

            result.add(dto);
        }

        return result;
    }

    @Override
    public List<Application> getApplicationsByJob(
            Long jobId) {

        return applicationRepository.findByJobId(jobId);
    }

    @Override
    public Boolean existsByUserIdAndJobId(Long userId, Long jobId) {

        return applicationRepository.existsByUserIdAndJobId(userId, jobId);
    }

    @Override
    public List<ApplicantDto> getApplicantsByJob(Long jobId) {
        List<Application> applications =
                applicationRepository
                        .findByJobId(jobId);

        List<ApplicantDto> result =
                new ArrayList<>();

        for (Application application : applications) {

            User user =
                    userRepository
                            .findById(
                                    application.getUserId())
                            .orElseThrow();

            result.add(
                    new ApplicantDto(
                            application.getId(),
                            user.getId(),
                            user.getName(),
                            user.getEmail(),
                            application.getStatus()
                    )
            );
        }

        return result;
    }


}