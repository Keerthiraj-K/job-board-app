package com.jobBoard.backend.controller;

import com.jobBoard.backend.dto.AuthResponse;
import com.jobBoard.backend.dto.LoginRequest;
import com.jobBoard.backend.dto.LoginResponse;
import com.jobBoard.backend.dto.RegisterRequest;
import com.jobBoard.backend.entity.User;
import com.jobBoard.backend.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public User register(
            @RequestBody RegisterRequest request) {

        return authService.register(request);
    }

    @PostMapping("/login")
    public LoginResponse login(
            @RequestBody LoginRequest request) {

        return authService.login(request);
    }
}
