package com.example.backend.model;

public enum Departments {
    MARKETING ("Marketing"),
    SALES ("Sales"),
    HR ("Human Resources"),
    IT ("IT") ,
    OFFICE ("Office"),
    OTHER ("Other"),
    ACCOUNTING ("Accounting");

    public final String label;

    Departments(String label) {
        this.label = label;
    }
}
