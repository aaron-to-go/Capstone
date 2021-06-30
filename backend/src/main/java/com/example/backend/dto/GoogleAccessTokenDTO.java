package com.example.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GoogleAccessTokenDTO {
    private String access_token;
    private String expires_in;
    private String refresh_token;
    private String scope;
    private String token_type;
}
