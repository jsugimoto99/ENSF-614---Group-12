package com.group12.CloudNineBackend.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
    private int ticketId;
	
    private String toEmail;
    private String price;
    private String departure;
    //private Flight flight
    private String destination;
//    private String seat;
    
    @OneToOne
    @JoinColumn(name = "seatId")
    private Seat seat;
    
    
    //ticket needs one to one w flight and join on flight_id
    
//    public String getdestination(Flight flight){
//    	return flight.getDepartLoc();
//    }
    
    
    public void setSeat(Seat seat) {
        this.seat = seat;
        seat.setTicket(this); // This line ensures the bidirectional relationship is maintained.
    }
    
    // Default constructor
    public Ticket() {
    }

    // Constructor with all fields
//    public Ticket(String ticketId, String toEmail, String price, String destination, String seat) {
//        this.ticketId = ticketId;
//        this.toEmail = toEmail;
//        this.price = price;
//        this.destination = destination;
//        this.seat = seat;
//    }

    // Getters and setters
    public int getTicketId() {
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

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public Seat getSeat() {
        return this.seat;
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
                "ticketId='" + ticketId + '\'' +
                ", toEmail='" + toEmail + '\'' +
                ", price='" + price + '\'' +
                ", destination='" + destination + '\'' +
                ", seat='" + seat + '\'' +
                '}';
    }

	/**
	 * @return the departure
	 */
	public String getDeparture() {
		return departure;
	}

	/**
	 * @param departure the departure to set
	 */
	public void setDeparture(String departure) {
		this.departure = departure;
	}
}
