package com.group12.CloudNineBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group12.CloudNineBackend.boundary.FlightService;
import com.group12.CloudNineBackend.domain.Flight;

/**
 * 
 * Controller class for handling HTTP requests related to flights.
 *
 * @author Jeremy Sugimoto
 */

@RestController
@RequestMapping("/flight")
public class FlightController {

    @Autowired
    private FlightService flightService;

    /**
     * Handles HTTP POST requests to create a new flight.
     *
     * @param flight The flight object to be added. Sent as a request body.
     * @return A string indicating that the flight has been created.
     */
    @PostMapping("/add")
    public String add(@RequestBody Flight flight) {
        flightService.addFlight(flight);
        return "Flight has been created";
    }

    /**
     * Handles HTTP GET requests to retrieve a list of all flights.
     *
     * @return A list of Flight objects representing all flights.
     */
    @GetMapping("/getAll")
    public List<Flight> list() {
        return flightService.getAllFlights();
    }
}
