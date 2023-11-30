package com.group12.CloudNineBackend.boundary;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group12.CloudNineBackend.domain.Flight;

/**
 * Implementation of the FlightService interface that provides
 * functionality for adding and retrieving flights.
 *
 * @author Jeremy Sugimoto
 * 
 */
@Service
public class FlightServiceImpl implements FlightService {

    @Autowired
    private FlightRepository flightRepository;

    /**
     * Adds a new flight.
     *
     * @param flight The Flight object to be added.
     * @return The Flight object that has been added.
     */
    @Override
    public Flight addFlight(Flight flight) {
        return flightRepository.save(flight);
    }

    /**
     * Retrieves a list of all flights.
     *
     * @return A list of Flight objects representing all flights.
     */
    @Override
    public List<Flight> getAllFlights() {
        return flightRepository.findAll();
    }

	@Override
	public void deleteFlight(Long id) {
		flightRepository.deleteById(id);
	}

	@Override
	public List<Flight> getFlights(Date date, String dep, String dest) {
		return flightRepository.findByDateAndDepartLocAndDestLoc(date, dep, dest);
	}
}
