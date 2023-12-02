package com.group12.CloudNineBackend.domain;

import java.util.Random;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;

@Entity
public class Promotion {
    
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int promoId;
    private String description;
    private String code; // 5-digit code
    
    // Standard constructors, getters, and setters
    public int getPromoId() {
    	return promoId;
    }
    
    public String getDescription() {
    	return description;
    }
    
    public void setDescription(String description) {
    	this.description = description;
    }
    
    public String getCode() {
    	return code;
    }
    
    @PrePersist
    public void generateCode() {
    	this.code = generateRandomCode();
    }
    
    private String generateRandomCode() {
        Random random = new Random();
        int num = 10000 + random.nextInt(90000); // Generates a number between 10000 and 99999
        return String.valueOf(num);
    }
}
