package com.jobBoard.backend.service;

import com.jobBoard.backend.entity.Job;
import com.jobBoard.backend.repository.JobRepository;
import com.jobBoard.backend.service.JobService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JobServiceImpl implements JobService {

    private final JobRepository jobRepository;

    @Override
    public Job createJob(Job job) {
        return jobRepository.save(job);
    }

    @Override
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    @Override
    public Job getJobById(Long id) {

        return jobRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Job not found"));
    }

    @Override
    public Job updateJob(Long id, Job job) {

        Job existingJob = getJobById(id);

        existingJob.setTitle(job.getTitle());
        existingJob.setCompany(job.getCompany());
        existingJob.setLocation(job.getLocation());
        existingJob.setDescription(job.getDescription());
        existingJob.setSkills(job.getSkills());

        return jobRepository.save(existingJob);
    }

    @Override
    public void deleteJob(Long id) {

        Job existingJob = getJobById(id);

        jobRepository.delete(existingJob);
    }

    @Override
    public List<Job> getJobsByEmployer(Long employerId) {

        return jobRepository.findByEmployerId(employerId);
    }
}
