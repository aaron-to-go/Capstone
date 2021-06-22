package com.example.backend.model;

public enum Department {
    MARKETING ("Marketing"),
    SALES ("Sales"),
    HR ("Human Resources"),
    IT ("IT") ,
    OFFICE ("Office"),
    OTHER ("Other"),
    ACCOUNTING ("Accounting");

    public final String label;

    Department(String label) {
        this.label = label;
    }
}
