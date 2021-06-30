package com.example.backend.service;

import com.example.backend.dto.GoogleAccessTokenDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GoogleLoginService {
    private final RestTemplate restTemplate;

    private String client_id = "41125772544-es4ec32mlpq30rq3i8r8q5q8b3b25r7e.apps.googleusercontent.com";
    private String client_secret = "nFkD0I3uSXJYvnixSSxgmVey";

    @Autowired
    public GoogleLoginService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String loginWithGoogle(String code){
        String accessToken = getAccessToken(code);
        return accessToken;
    }

    private String getAccessToken(String code) {
        String url = "https://oauth2.googleapis.com/token?&redirect_uri=http://localhost:3000/auth/&code="
                +code
                +"&client_id=" + client_id
                +"&client_secret=" +client_secret
                +"&grant_type=authorization_code";

        ResponseEntity<GoogleAccessTokenDTO> responseEntity = restTemplate.exchange(url, HttpMethod.POST, null, GoogleAccessTokenDTO.class);

        return responseEntity.getBody().getAccess_token();
    }
}
