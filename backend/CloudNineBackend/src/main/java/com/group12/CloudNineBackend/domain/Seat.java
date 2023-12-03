package com.group12.CloudNineBackend.domain;

import java.math.BigDecimal;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;



@Entity
@Table(name = "seat")

public class Seat {
	@Id
	private String seatId;
	
	@ManyToOne
    @JoinColumn(name = "aircraft_id")
    private Aircraft aircraft;
	private String type;
	private BigDecimal price;
    @OneToOne(mappedBy = "seat", cascade = CascadeType.ALL, orphanRemoval = true)
    private Ticket ticket;
    
    
	
    public Seat() {
    	
    }
    
    public Seat(Aircraft aircraft, String seatId, String type, BigDecimal price) {
		this.aircraft = aircraft;
		this.type = type;
		this.seatId = seatId;
		this.price = price;
	}
    
    public String getSeatId() {
		return seatId;
	}

	public void setTicket(Ticket ticket) {
    	this.ticket = ticket;
//    	ticket.setSeat(this);
    }
	
	public Ticket getTicket() {
		return ticket;
	}
	
	public String getType() {
		return type;
	}
	
	public void setType(String type) {
		this.type = type;
	}

	/**
	 * @return the price
	 */
	public BigDecimal getPrice() {
		return price;
	}

	/**
	 * @param price the price to set
	 */
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	
	
}
