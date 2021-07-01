package com.example.backend.config;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "google.oauth")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GoogleLoginConfig {

    private String clientId;
    private String clientSecret;
    private String redirectUri;
}
