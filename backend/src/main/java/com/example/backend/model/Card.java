package com.example.backend.model;

import java.time.LocalDateTime;
import java.util.Set;

public class Card {
    private int id;
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
