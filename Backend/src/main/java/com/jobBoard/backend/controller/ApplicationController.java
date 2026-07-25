package com.jobBoard.backend.controller;

import com.jobBoard.backend.entity.Application;
import com.jobBoard.backend.service.ApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
@RequiredArgsConstructor
public class ApplicationController {

    private final ApplicationService applicationService;

    @PostMapping
    public Application applyJob(
            @RequestBody Application application) {

        return applicationService.applyJob(application);
    }

    @GetMapping("/user/{userId}")
    public List<Application> getApplicationsByUser(
            @PathVariable Long userId) {

        return applicationService.getApplicationsByUser(userId);
    }

    @GetMapping("/job/{jobId}")
    public List<Application> getApplicationsByJob(
            @PathVariable Long jobId) {

        return applicationService.getApplicationsByJob(jobId);
    }
}
