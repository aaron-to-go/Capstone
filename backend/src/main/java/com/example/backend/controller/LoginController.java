package com.example.backend.controller;

import com.example.backend.dto.GoogleCodeDTO;
import com.example.backend.service.GoogleLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth/google/login")
public class LoginController {

    private final  GoogleLoginService googleLoginService;

    @Autowired
    public LoginController(GoogleLoginService googleLoginService) {
        this.googleLoginService = googleLoginService;
    }

    @PostMapping
    public String loginWithGoogle(@RequestBody GoogleCodeDTO code){
        return googleLoginService.loginWithGoogle(code.getCode());
        }


}
