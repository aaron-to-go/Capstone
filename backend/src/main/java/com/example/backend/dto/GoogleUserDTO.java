package com.example.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GoogleUserDTO {
    @Id
    private String id;
    private String name;
    private String given_name;
    private String family_name;
    private String picture;
    private String locale;
}
