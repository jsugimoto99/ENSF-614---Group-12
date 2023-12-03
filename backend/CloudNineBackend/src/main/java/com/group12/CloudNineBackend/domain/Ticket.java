package com.group12.CloudNineBackend.domain;

import java.math.BigDecimal;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

/**
 * Entity class representing a Ticket.
 * This class is annotated with @Entity, indicating that it is a JPA entity
 * and can be persisted to a database.
 * 
 * @author Alton Wong
 * 
 */
@Entity
public class Ticket {

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ticketId;
	
    private String toEmail;
    private String firstName;
    private String lastName;
    private Boolean insurance;
    
    @OneToOne
    @JoinColumn(name = "seat_id")
    private Seat seat;
    
    @OneToOne(mappedBy = "ticket", cascade = CascadeType.ALL, orphanRemoval = true)
    private PaymentTransaction paymentTransaction;
    
    @ManyToOne
    @JoinColumn(name = "flight_id")
    private Flight flight;
    
    public String getSeatId() {
    	return this.seat.getSeatId();
    }
    public String getSeatClass() {
    	return this.seat.getType();
    }
    
    public BigDecimal getPrice() {
    	return this.seat.getPrice();
    }
    
    public String getDeparture(){
    	return this.flight.getDepartLoc();
    }
    
    public String getDestination() {
    	return this.flight.getDestLoc();
    }
    
    public void setSeat(Seat seat) {
        this.seat = seat;
        seat.setTicket(this); // This line ensures the bidirectional relationship is maintained.
    }
    
    // Default constructor
    public Ticket() {
    	
    }
    public PaymentTransaction getPaymentTransaction() {
        return paymentTransaction;
    }

    public void setPaymentTransaction(PaymentTransaction paymentTransaction) {
        this.paymentTransaction = paymentTransaction;
    }
    public void removePaymentTransaction() {
        this.paymentTransaction = null;
    }

    // Getters and setters
    
    public Boolean getInsurance() {
    	return insurance;
    }
    
    public void setInsurance(Boolean insurance) {
    	this.insurance = insurance;
    }
    
    public Long getTicketId() {
        return ticketId;
    }

    public void setTicketId(int ticketId) {
        this.ticketId = ticketId;
    }

    public String getToEmail() {
        return toEmail;
    }

    public void setToEmail(String toEmail) {
        this.toEmail = toEmail;
    }

    public Seat getSeat() {
        return this.seat;
    }

    public String getFirstName() {
    	return firstName;
    }
    
    public String getLastName() {
    	return lastName;
    }
    
    public void setFirstName(String fName) {
    	this.firstName = fName;
    }
    
    public void setLastName(String lName) {
    	this.lastName = lName;
    	
    	
    }
//    public void setSeat(Seat seat) {
//        this.seat = seat;
//        if (seat != null && seat.getTicket() != this) {
//            seat.setTicket(this); // This line maintains the bidirectional relationship.
//        }
//    }

    // Optional: Override the toString method for debugging
    @Override
    public String toString() {
        return "Ticket{" +
        		"firstName=" + firstName +
        		"lastName=" + lastName+
                "ticketId='" + ticketId + '\'' +
                ", toEmail='" + toEmail + '\'' +
                ", price='" + seat.getPrice() + '\'' +
                ", destination='" + flight.getDestLoc() + '\'' +
                ", seat='" + seat.getSeatId() + '\'' +
                '}';
    }

	public void setFlight(Flight flight) {
	    this.flight = flight;
	    // If you need to maintain bidirectionality and the flight should be aware of the ticket:
	    if (flight != null && !flight.getTickets().contains(this)) {
	        flight.getTickets().add(this);
	    }
	}


	public void remove() {
	    if (this.flight != null) {
	        this.flight.getTickets().remove(this);
	        this.flight = null;
	    }
	    // Assuming there is a bidirectional relationship with Seat as well:
	    if (this.seat != null) {
	        this.seat.setTicket(null);
	        this.seat = null;
	    }
	}

}
