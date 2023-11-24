package com.group12.CloudNineBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
@CrossOrigin
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
    public HttpStatus add(@RequestBody Flight flight) {
    	flightService.addFlight(flight);
        return HttpStatus.OK;
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
