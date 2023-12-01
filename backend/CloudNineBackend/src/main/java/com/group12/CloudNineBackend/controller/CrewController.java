package com.group12.CloudNineBackend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group12.CloudNineBackend.boundary.CrewRepo;
import com.group12.CloudNineBackend.domain.Crew;

@RestController
@RequestMapping("/Crew")
@CrossOrigin
public class CrewController {
    @Autowired
    private CrewRepo crewRepo;
    
    
    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> add(@RequestBody Crew crew) {
        Map<String, Object> response = new HashMap<>();

        // Save the aircraft to generate its ID
        crewRepo.save(crew);

        response.put("status", "success");
        response.put("message", "Crew added to database");
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
    
}
