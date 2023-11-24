package com.group12.CloudNineBackend.domain;

public class LoginResponse {
    private String status;
    private String role;

    // Constructors, getters, and setters

    public LoginResponse(String status, String role) {
        this.status = status;
        this.role = role;
    }
}
