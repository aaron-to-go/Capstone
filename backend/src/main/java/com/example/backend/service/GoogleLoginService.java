package com.example.backend.service;

import com.example.backend.config.GoogleLoginConfig;
import com.example.backend.dto.GoogleAccessTokenDTO;
import com.example.backend.dto.GoogleUserDTO;
import com.example.backend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GoogleLoginService {
    private final RestTemplate restTemplate;
    private final GoogleLoginConfig googleLoginConfig;
    private final UserService userService;

    @Autowired
    public GoogleLoginService(RestTemplate restTemplate, GoogleLoginConfig googleLoginConfig, UserService userService) {
        this.restTemplate = restTemplate;
        this.googleLoginConfig = googleLoginConfig;
        this.userService = userService;
    }

    public String loginWithGoogle(String code){
        GoogleAccessTokenDTO accessToken = getAccessToken(code);
        GoogleUserDTO userInfo = getGoogleProfileInfo(accessToken.getAccess_token());

        User user = userService.loginWithGoogleProfile(userInfo, accessToken);
        System.out.println(user);
        return null;
    }

    private GoogleAccessTokenDTO getAccessToken(String code) {
        String url = "https://oauth2.googleapis.com/token?"
                +"&redirect_uri=" + googleLoginConfig.getRedirectUri()
                +"&code=" + code
                +"&client_id=" + googleLoginConfig.getClientId()
                +"&client_secret=" + googleLoginConfig.getClientSecret()
                +"&grant_type=authorization_code";

        ResponseEntity<GoogleAccessTokenDTO> responseEntity = restTemplate.exchange(url, HttpMethod.POST, null, GoogleAccessTokenDTO.class);

        GoogleAccessTokenDTO accessTokenDTO = responseEntity.getBody();

        return accessTokenDTO;
    }

    private GoogleUserDTO getGoogleProfileInfo(String access_token) {
        String url = "https://www.googleapis.com/oauth2/v1/userinfo?alt=json";
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(access_token);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<GoogleUserDTO> responseEntity = restTemplate.exchange(url, HttpMethod.GET, entity, GoogleUserDTO.class);

        GoogleUserDTO response = responseEntity.getBody();

        return response;
    }

}
