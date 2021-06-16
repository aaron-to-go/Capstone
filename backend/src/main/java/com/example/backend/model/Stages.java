package com.example.backend.model;

public enum Stages {
    NEW ("new"),
    INDISCUSSION ("inDiscussion"),
    DISMISSED ("dismissed"),
    INIMPLEMENTATION ("inImplementation") ,
    IMPLEMENTED ("implemented");

    public final String label;

    Stages(String label) {
        this.label = label;
    }
}
