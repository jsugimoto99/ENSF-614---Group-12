package com.group12.CloudNineBackend.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.group12.CloudNineBackend.boundary.LocationRepo;
import com.group12.CloudNineBackend.domain.Location;
@RestController
@RequestMapping("/location")
@CrossOrigin
public class LocationController {
	  @Autowired
	    private LocationRepo locationRepo;
	
	@PostMapping("/add")
    public ResponseEntity<Map<String, Object>> add(@RequestBody Location location) {
        Map<String, Object> response = new HashMap<>();

        // Save the aircraft to generate its ID
        locationRepo.save(location);

        response.put("status", "success");
        response.put("message", "Location added to database");
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
	@GetMapping("/listAll")
    public ResponseEntity<List<Map<String, Object>>> getAllLocations() {
        try {
            List<Location> locations = locationRepo.findAll();
            List<Map<String, Object>> responseList = new ArrayList<>();

            for (Location location: locations) {
                Map<String, Object> locationMap = new HashMap<>();
                locationMap.put("code", location.getCode());
                locationMap.put("city", location.getCity());
                locationMap.put("country", location.getCountry());
                responseList.add(locationMap);
            }

            return new ResponseEntity<>(responseList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
