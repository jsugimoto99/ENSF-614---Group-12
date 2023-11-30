package com.group12.CloudNineBackend.domain;

import java.sql.Date;
import java.sql.Time;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

/**
 * Entity class representing a Flight.
 * This class is annotated with @Entity, indicating that it is a JPA entity
 * and can be persisted to a database.
 * 
 * @author Jeremy Sugimoto
 * 
 */
@Entity
public class Flight {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String departLoc;
    private String destLoc;
    private Date date;
    private Time departTime;
    private Time arriveTime;

    /**
     * Default constructor for Flight class.
     */
    public Flight() {
    }

    public Long getId() {
    	return id;
    }
    /**
     * Gets the departure location of the flight.
     *
     * @return The departure location.
     */
    public String getDepartLoc() {
        return departLoc;
    }

    /**
     * Sets the departure location of the flight.
     *
     * @param depart_loc The departure location to set.
     */
    public void setDepartLoc(String depart_loc) {
        this.departLoc = depart_loc;
    }

    /**
     * Gets the departure date of the flight.
     *
     * @return The departure date.
     */
    public Date getDate() {
        return date;
    }

    /**
     * Sets the departure date of the flight.
     *
     * @param depart_date The departure date to set.
     */
    public void setDate(Date depart_date) {
        this.date = depart_date;
    }

    /**
     * Gets the departure time of the flight.
     *
     * @return The departure time.
     */
    public Time getDepartTime() {
        return departTime;
    }

    /**
     * Sets the departure time of the flight.
     *
     * @param depart_time The departure time to set.
     */
    public void setDepartTime(Time depart_time) {
        this.departTime = depart_time;
    }

    /**
     * Gets the destination location of the flight.
     *
     * @return The destination location.
     */
    public String getDestLoc() {
        return destLoc;
    }

    /**
     * Sets the destination location of the flight.
     *
     * @param dest_loc The destination location to set.
     */
    public void setDestLoc(String dest_loc) {
        this.destLoc = dest_loc;
    }

    /**
     * Gets the arrival time of the flight.
     *
     * @return The arrival time.
     */
    public Time getArriveTime() {
        return arriveTime;
    }

    /**
     * Sets the arrival time of the flight.
     *
     * @param arrive_time The arrival time to set.
     */
    public void setArriveTime(Time arrive_time) {
        this.arriveTime = arrive_time;
    }
}
