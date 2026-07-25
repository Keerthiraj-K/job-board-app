package com.jobBoard.backend.service;

import com.jobBoard.backend.entity.Application;
import com.jobBoard.backend.repository.ApplicationRepository;
import com.jobBoard.backend.service.ApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ApplicationServiceImpl
        implements ApplicationService {

    private final ApplicationRepository applicationRepository;

    @Override
    public Application applyJob(
            Application application) {

        application.setStatus("APPLIED");

        return applicationRepository.save(application);
    }

    @Override
    public List<Application> getApplicationsByUser(
            Long userId) {

        return applicationRepository.findByUserId(userId);
    }

    @Override
    public List<Application> getApplicationsByJob(
            Long jobId) {

        return applicationRepository.findByJobId(jobId);
    }
}