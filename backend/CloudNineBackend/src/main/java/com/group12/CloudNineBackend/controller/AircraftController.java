package com.group12.CloudNineBackend.controller;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group12.CloudNineBackend.boundary.AircraftRepo;
import com.group12.CloudNineBackend.boundary.SeatRepo;
import com.group12.CloudNineBackend.domain.Aircraft;
import com.group12.CloudNineBackend.domain.Seat;

@RestController
@RequestMapping("/aircraft")
@CrossOrigin
public class AircraftController {
    @Autowired
    private AircraftRepo aircraftRepo;

    @Autowired
    private SeatRepo seatRepo;

    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> add(@RequestBody Aircraft aircraft) {
        Map<String, Object> response = new HashMap<>();

        // Save the aircraft to generate its ID
        aircraftRepo.save(aircraft);

        // Generate and save seats
        generateAndSaveSeats(aircraft,1, aircraft.getBusinessRows(), aircraft.getBusinessSeatsPerRow(), "Business", new BigDecimal("200.0"));
        generateAndSaveSeats(aircraft,aircraft.getBusinessRows() + 1, aircraft.getComfortRows(), aircraft.getSeatsPerRow(), "Comfort", new BigDecimal("100.0"));
        generateAndSaveSeats(aircraft,aircraft.getComfortRows() + aircraft.getBusinessRows() + 1, aircraft.getEconomyRows(), aircraft.getSeatsPerRow(), "Economy", new BigDecimal("50.0"));

        response.put("status", "success");
        response.put("message", "Aircraft and seats added to database");
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    private void generateAndSaveSeats(Aircraft aircraft, int startRow, int numRows, int seatsPerRow, String type, BigDecimal price) {
        for (int row = startRow; row < startRow + numRows; row++) {
            for (char seat = 'A'; seat < 'A' + seatsPerRow; seat++) {
                String seatId = aircraft.getId() +"-"+ row + "" + seat;    
                Seat newSeat = new Seat(aircraft, seatId, type, price);
                seatRepo.save(newSeat);
            }
        }
    }

    @GetMapping("/listAll")
    public ResponseEntity<List<Map<String, Object>>> getAllAircrafts() {
        try {
            List<Aircraft> aircrafts = aircraftRepo.findAll();
            List<Map<String, Object>> responseList = new ArrayList<>();

            for (Aircraft aircraft: aircrafts) {
                Map<String, Object> aircraftMap = new HashMap<>();
                aircraftMap.put("aircraftId", aircraft.getId());
                aircraftMap.put("model", aircraft.getModel());
                responseList.add(aircraftMap);
            }

            return new ResponseEntity<>(responseList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/getAircraftByFlightId/{flightId}")
    public ResponseEntity<Map<String, Object>> getAircraftByFlightId(@PathVariable Long flightId) {
        try {
            Optional<Aircraft> optionalAircraft = aircraftRepo.findByFlightId(flightId);

            if (optionalAircraft.isPresent()) {
                Aircraft aircraft = optionalAircraft.get();
                Map<String, Object> aircraftMap = new HashMap<>();
                aircraftMap.put("aircraftId", aircraft.getId());
                aircraftMap.put("model", aircraft.getModel());
                aircraftMap.put("businessSeatsPerRow", aircraft.getBusinessSeatsPerRow());
                aircraftMap.put("seatsPerRow", aircraft.getSeatsPerRow());
                aircraftMap.put("businessRows", aircraft.getBusinessRows());
                aircraftMap.put("comfortRows", aircraft.getComfortRows());
                aircraftMap.put("economyRows", aircraft.getEconomyRows());
                
                

                return new ResponseEntity<>(aircraftMap, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    
    @GetMapping("/listAllAvailable")
    public ResponseEntity<List<Map<String, Object>>> getAllAvailableAircrafts() {
        try {
            List<Aircraft> aircrafts = aircraftRepo.findByFlightIdIsNull();;
            List<Map<String, Object>> responseList = new ArrayList<>();

            for (Aircraft aircraft: aircrafts) {
                Map<String, Object> aircraftMap = new HashMap<>();
                aircraftMap.put("aircraftId", aircraft.getId());
                aircraftMap.put("model", aircraft.getModel());
                aircraftMap.put("businessSeatsPerRow", aircraft.getBusinessSeatsPerRow());
                aircraftMap.put("seatsPerRow", aircraft.getSeatsPerRow());
                aircraftMap.put("businessRows", aircraft.getBusinessRows());
                aircraftMap.put("comfortRows", aircraft.getBusinessRows());
                aircraftMap.put("economyRows", aircraft.getBusinessRows());
                responseList.add(aircraftMap);
            }

            return new ResponseEntity<>(responseList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Map<String, Object>> delete(@PathVariable("id") int id) {
		try {
            aircraftRepo.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
