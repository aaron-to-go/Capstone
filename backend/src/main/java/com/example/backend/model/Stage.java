package com.example.backend.model;

public enum Stage {
    NEW ("new"),
    INDISCUSSION ("inDiscussion"),
    DISMISSED ("dismissed"),
    INIMPLEMENTATION ("inImplementation") ,
    IMPLEMENTED ("implemented");

    public final String label;

    Stage(String label) {
        this.label = label;
    }
}
