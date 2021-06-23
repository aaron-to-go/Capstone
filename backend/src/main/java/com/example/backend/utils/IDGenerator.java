package com.example.backend.utils;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class IDGenerator {
    @Bean
    public String generateID() {
        return UUID.randomUUID().toString();
    }

}
