package com.group12.CloudNineBackend.controller;

import java.util.List;
import java.util.Map;
import java.sql.Date;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
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
        
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> deleteFlight(@PathVariable("id") Long id) {
        try {
            flightService.deleteFlight(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    /**
     * Handles HTTP GET requests to retrieve a list of all flights.
     *
     * @return A list of Flight objects representing all flights.
     */
    @GetMapping("/listAll")
    public ResponseEntity<List<Map<String, Object>>> getAllFlights() {
        try {
            List<Flight> flights = flightService.getAllFlights();
            List<Map<String, Object>> responseList = new ArrayList<>();

            for (Flight flight : flights) {
                Map<String, Object> flightMap = new HashMap<>();
                flightMap.put("id", flight.getId());
                flightMap.put("depart_loc", flight.getDepartLoc());
                flightMap.put("dest_loc", flight.getDestLoc());
                flightMap.put("depart_date", flight.getDate());

                responseList.add(flightMap);
            }

            return new ResponseEntity<>(responseList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/listFlights/{date}/{departLoc}/{destLoc}")
    public ResponseEntity<List<Map<String, Object>>> getFlightsByDayAndLocations(
        @PathVariable String departLoc,
        @PathVariable String destLoc,
        @PathVariable Date date
    ) {
        try {
            List<Flight> flights = flightService.getFlights(date, departLoc, destLoc);
            List<Map<String, Object>> responseList = new ArrayList<>();

            for (Flight flight : flights) {
                Map<String, Object> flightMap = new HashMap<>();
                flightMap.put("id", flight.getId());
                flightMap.put("departLoc", flight.getDepartLoc());
                flightMap.put("destLoc", flight.getDestLoc());
                flightMap.put("date", flight.getDate());
                flightMap.put("departTime",flight.getDepartTime());
                flightMap.put("arriveTime", flight.getArriveTime());

                responseList.add(flightMap);
            }
            
//            return ResponseEntity.ok(responseList);

            return new ResponseEntity<>(responseList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}