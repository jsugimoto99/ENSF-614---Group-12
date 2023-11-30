package com.group12.CloudNineBackend.domain;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(name = "seat", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"seatId"}),
})
public class Seat {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private String seatId;
	private String type;
	// Change to Object User and Flight
	private String user;
//	private String flight;
	
	
	@ManyToOne
    @JoinColumn(name = "flight_id")
    private Flight flight;

    @OneToOne(mappedBy = "seat", cascade = CascadeType.ALL, orphanRemoval = true)
    private Ticket ticket;
	
    public void setTicket(Ticket ticket) {
    	this.ticket = ticket;
    	ticket.setSeat(this);
    }
    
    public void setFlight(Flight flight) {
        this.flight = flight;
        if (flight != null && !flight.getSeats().contains(this)) {
            flight.getSeats().add(this); // This line maintains the bidirectional relationship.
        }
    }
	

	/**
	 * @return the type
	 */
	public String getType() {
		return type;
	}
	/**
	 * @param type the type to set
	 */
	public void setType(String type) {
		this.type = type;
	}
	/**
	 * @return the user
	 */
	/**
	 * @return the user
	 */
	public String getUser() {
		return user;
	}
	/**
	 * @param user the user to set
	 */
	public void setUser(String user) {
		this.user = user;
	}
	/**
	 * @return the flight
	 */
	public Flight getFlight(){
		return flight;
	}

	/**
	 * @return the aircraft
	 */
//	public void setFlight(Flight flight) {
//		this.flight = flight;
//	}

	
	
	
}
