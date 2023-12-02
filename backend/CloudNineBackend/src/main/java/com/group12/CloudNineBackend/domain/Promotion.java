package com.group12.CloudNineBackend.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Promotion {
    
    @Id
    private int promoId;
    private String description;
    
    // Standard constructors, getters, and setters
    public int getPromoId() {
    	return promoId;
    }
    
    public String getDescription() {
    	return description;
    }
    
    public void setPromoId(int promoId) {
    	this.promoId = promoId;
    }
    
    public void setDescription(String description) {
    	this.description = description;
    }
}
