package com.example.backend.dto;

import com.example.backend.model.Department;
import com.example.backend.model.Stage;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CardDTO {
    private String title;
    private String description;
    private String user_id;
    private Department department;
}
