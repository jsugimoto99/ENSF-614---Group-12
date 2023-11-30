package com.group12.CloudNineBackend.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(name = "seat", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"seatId"}),
})
public class Seat {

	@Id
    private String seatId;
	private String type;
	// Change to Object User and Flight
	private String user;
	private Long aircraftId;
	
	public Seat(Long aircraft, String seatId, String type) {
		this.seatId = seatId;
		this.type = type;
		this.aircraftId = aircraft;
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


	/**
	 * @return the aircraft
	 */
	public long getAircraftId() {
		return aircraftId;
	}


	/**
	 * @param aircraft the aircraft to set
	 */
	public void setAircraftId(Long aircraft) {
		this.aircraftId = aircraft;
	}
	
	
	
	
}
