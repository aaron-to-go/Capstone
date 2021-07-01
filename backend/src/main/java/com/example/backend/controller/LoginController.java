package com.example.backend.controller;

import com.example.backend.config.GoogleLoginConfig;
import com.example.backend.dto.GoogleCodeDTO;
import com.example.backend.dto.GoogleLoginConfigDTO;
import com.example.backend.service.GoogleLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth/google/login")
public class LoginController {

    private final  GoogleLoginService googleLoginService;
    private final GoogleLoginConfig googleLoginConfig;

    @Autowired
    public LoginController(GoogleLoginService googleLoginService, GoogleLoginConfig googleLoginConfig) {
        this.googleLoginService = googleLoginService;
        this.googleLoginConfig = googleLoginConfig;
    }

    @PostMapping
    public String loginWithGoogle(@RequestBody GoogleCodeDTO code){
        return googleLoginService.loginWithGoogle(code.getCode());
        }

    @GetMapping
    public GoogleLoginConfigDTO getGoogleLoginDTO(){
        return GoogleLoginConfigDTO.builder()
                .client_id(googleLoginConfig.getClientId())
                .redirect_uri(googleLoginConfig.getRedirectUri())
                .build();
    }


}
