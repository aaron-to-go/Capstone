package com.example.backend.service;

import com.example.backend.config.GoogleLoginConfig;
import com.example.backend.dto.GoogleAccessTokenDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GoogleLoginService {
    private final RestTemplate restTemplate;
    private final GoogleLoginConfig googleLoginConfig;

    @Autowired
    public GoogleLoginService(RestTemplate restTemplate, GoogleLoginConfig googleLoginConfig) {
        this.restTemplate = restTemplate;
        this.googleLoginConfig = googleLoginConfig;
    }

    public String loginWithGoogle(String code){
        String accessToken = getAccessToken(code);
        return accessToken;
    }

    private String getAccessToken(String code) {
        String url = "https://oauth2.googleapis.com/token?"
                +"&redirect_uri=" + googleLoginConfig.getRedirectUri()
                +"&code=" + code
                +"&client_id=" + googleLoginConfig.getClientId()
                +"&client_secret=" + googleLoginConfig.getClientSecret()
                +"&grant_type=authorization_code";

        ResponseEntity<GoogleAccessTokenDTO> responseEntity = restTemplate.exchange(url, HttpMethod.POST, null, GoogleAccessTokenDTO.class);

        return responseEntity.getBody().getAccess_token();
    }
}
