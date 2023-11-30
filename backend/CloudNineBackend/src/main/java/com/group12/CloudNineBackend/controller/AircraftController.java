package com.group12.CloudNineBackend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group12.CloudNineBackend.boundary.AircraftRepo;
import com.group12.CloudNineBackend.domain.Aircraft;

@RestController
@RequestMapping("/Aircraft")
@CrossOrigin
public class AircraftController {
	@Autowired
	private AircraftRepo aircraftRepo;
	
	@PostMapping("/add")
	public ResponseEntity<Map<String, Object>> add(@RequestBody Aircraft aircraft) {
	    Map<String, Object> response = new HashMap<>();
	    aircraftRepo.save(aircraft);
	    
	    

        response.put("status", "success");
        response.put("message", "Aircraft added to database");
        return ResponseEntity.status(HttpStatus.OK).body(response);
	    
}
	
	@PostMapping("/delete{id}")
	public ResponseEntity<Map<String, Object>> delete(@PathVariable("id") Long id) {
		try {
            aircraftRepo.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
