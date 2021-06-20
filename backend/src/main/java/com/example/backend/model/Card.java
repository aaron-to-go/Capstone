package com.example.backend.model;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;
import java.util.Set;

public class Card {
    @Id
    private String id;
    private String title;
    private String description;
    private LocalDateTime datetime;
    private String user_id;
    private Stages stage;
    private StageHistory[] history;
    private Set<String> votes;
    private Comment[] comments;
    private Departments department;
    private Set<String> tags;
}
