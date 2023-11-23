package com.group12.CloudNineBackend.boundary;

import com.group12.CloudNineBackend.domain.Flight;
import java.util.List;

/**
 * Service interface for handling operations related to flights.
 * Implementations of this interface should provide functionality
 * for retrieving and adding flights.
 *
 * @author Jeremy Sugimoto
 */
public interface FlightService {

    /**
     * Retrieves a list of all flights.
     *
     * @return A list of Flight objects representing all flights.
     */
    public List<Flight> getAllFlights();

    /**
     * Adds a new flight.
     *
     * @param flight The Flight object to be added.
     * @return The Flight object that has been added.
     */
    public Flight addFlight(Flight flight);
}
