package com.group12.CloudNineBackend.domain;

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
    private int id;

    private String depart_loc;
    private String dest_loc;
    private String depart_date;
    private String depart_time;
    private String arrive_time;

    /**
     * Default constructor for Flight class.
     */
    public Flight() {
    }

    /**
     * Gets the departure location of the flight.
     *
     * @return The departure location.
     */
    public String getDepart_loc() {
        return depart_loc;
    }

    /**
     * Sets the departure location of the flight.
     *
     * @param depart_loc The departure location to set.
     */
    public void setDepart_loc(String depart_loc) {
        this.depart_loc = depart_loc;
    }

    /**
     * Gets the departure date of the flight.
     *
     * @return The departure date.
     */
    public String getDepart_date() {
        return depart_date;
    }

    /**
     * Sets the departure date of the flight.
     *
     * @param depart_date The departure date to set.
     */
    public void setDepart_date(String depart_date) {
        this.depart_date = depart_date;
    }

    /**
     * Gets the departure time of the flight.
     *
     * @return The departure time.
     */
    public String getDepart_time() {
        return depart_time;
    }

    /**
     * Sets the departure time of the flight.
     *
     * @param depart_time The departure time to set.
     */
    public void setDepart_time(String depart_time) {
        this.depart_time = depart_time;
    }

    /**
     * Gets the destination location of the flight.
     *
     * @return The destination location.
     */
    public String getDest_loc() {
        return dest_loc;
    }

    /**
     * Sets the destination location of the flight.
     *
     * @param dest_loc The destination location to set.
     */
    public void setDest_loc(String dest_loc) {
        this.dest_loc = dest_loc;
    }

    /**
     * Gets the arrival time of the flight.
     *
     * @return The arrival time.
     */
    public String getArrive_time() {
        return arrive_time;
    }

    /**
     * Sets the arrival time of the flight.
     *
     * @param arrive_time The arrival time to set.
     */
    public void setArrive_time(String arrive_time) {
        this.arrive_time = arrive_time;
    }
}
