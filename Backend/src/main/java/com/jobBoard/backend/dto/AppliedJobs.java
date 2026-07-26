package com.jobBoard.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class AppliedJobs {
    private Long applicationId;

    private Long jobId;

    private String title;

    private String company;

    private String location;

    private String description;

    private String status;
}
