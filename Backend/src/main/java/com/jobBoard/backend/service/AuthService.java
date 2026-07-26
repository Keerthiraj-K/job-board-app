package com.jobBoard.backend.service;

import com.jobBoard.backend.dto.LoginRequest;
import com.jobBoard.backend.dto.LoginResponse;
import com.jobBoard.backend.dto.RegisterRequest;
import com.jobBoard.backend.entity.User;

public interface AuthService {

    User register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
}