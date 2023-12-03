package com.group12.CloudNineBackend.domain;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

/**
 * Entity class representing a PaymentTransaction.
 * This class is annotated with @Entity, indicating that it is a JPA entity
 * and can be persisted to a database.
 *
 * @author Alton Wong
 */
@Entity
public class PaymentTransaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long transactionId;

    private String fName;
    private String lName;
    private String cardNumber;
    private String expiryDate;
    private int cvv;
    
    @OneToOne
    @JoinColumn(name = "seat_id")
    private Seat seat;

    // Default constructor
    public PaymentTransaction() {
        
    }

    // Getters and setters

    public Long getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(long transactionId) {
        this.transactionId = transactionId;
    }
    
    public String getFirstName() {
    	return fName;
    }
    
    public String getLastName() {
    	return lName;
    }
    
    public String getCardNumber() {
    	return cardNumber;
    }
    
    public String getExpiryDate() {
    	return expiryDate;
    }
    
    public int getCvv() {
    	return cvv;
    }

    public void setFirstName(String fName) {
    	this.fName = fName;
    }
    
    public void setLastName(String lName) {
    	this.lName = lName;
    }
    
    public void setCardNumber(String cardNumber) {
    	this.cardNumber = cardNumber;
    }
    
    public void setExpiryDate(String expiryDate) {
    	this.expiryDate = expiryDate;
    }
    
    public void setCvv(int cvv) {
    	this.cvv = cvv;
    }
    public Seat getSeat() {
        return seat;
    }
    
    public String getSeatId() {
    	return seat.getSeatId();
    }
    
    public void setSeat(Seat seat) {
        this.seat = seat;
    }
    
    public void setSeatId(Seat seatId) {
    	if(this.seat == null) {
    		this.seat = new Seat();
    	}
    	this.seat.getSeatId();
    }
    

}
