package com.group12.CloudNineBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group12.CloudNineBackend.boundary.SeatRepo;
import com.group12.CloudNineBackend.domain.Seat;

@RestController
@RequestMapping("/Seat")
@CrossOrigin
public class SeatController {
	@Autowired
	private SeatRepo seatRepo;
	
	@PostMapping("/add")
    public HttpStatus add(@RequestBody Seat seat) {
    	seatRepo.save(seat);
        return HttpStatus.OK;
    }
        
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> deleteSeat(@PathVariable("id") Long id) {
        try {
            seatRepo.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
	
	

}
