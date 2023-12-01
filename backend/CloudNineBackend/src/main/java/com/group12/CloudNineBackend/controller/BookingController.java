package com.group12.CloudNineBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.group12.CloudNineBackend.boundary.BookingService;
import com.group12.CloudNineBackend.domain.BookingRequest;
import com.group12.CloudNineBackend.domain.Ticket;

/**
 * Controller class for handling HTTP requests related to tickets.
 *
 * @author Alton Wong
 */
@RestController
@RequestMapping("/booking")
@CrossOrigin
public class BookingController {

    @Autowired
    private BookingService bookingService;

    /**
     * Handles HTTP POST requests to create a new ticket.
     *
     * @param ticket The ticket object to be created. Sent as a request body.
     * @return A ResponseEntity indicating the result of the operation.
     */
    @PostMapping("/add")
    public ResponseEntity<String> addTicket(@RequestBody BookingRequest bookingRequest) {
        
        System.out.println("Received booking request: " + bookingRequest);
    	
    	Ticket createdTicket = bookingService.addTicket(bookingRequest);
            return new ResponseEntity<>("Ticket has been successfully created with ID: " + createdTicket.getTicketId(), HttpStatus.CREATED);
    }

    /**
     * Handles HTTP GET requests to retrieve a list of all tickets.
     *
     * @return A list of Ticket objects representing all booked tickets.
     */
    @GetMapping("/getAll")
    public ResponseEntity<List<Ticket>> listAllTickets() {
        List<Ticket> tickets = bookingService.getAllTickets();
        return new ResponseEntity<>(tickets, HttpStatus.OK);
    }

    // Additional methods can be added here for other operations like updating or deleting tickets

    
}
