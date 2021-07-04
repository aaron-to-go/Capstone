package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Document(collection = "cards")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Card {
    @Id
    private String id;
    private String title;
    private String description;
    private LocalDateTime datetime;
    private String user_id;
    private Stage stage;
    private List<StageHistory> history;
    private Set<String> votes;
    private List<Comment> comments;
    private Department department;
    private Set<String> tags;
}
