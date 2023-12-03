package com.group12.CloudNineBackend.controller;

import java.util.List;
import java.util.Map;

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
    @GetMapping("/get/{id}/{lastName}")
    public ResponseEntity<Ticket> getTicket(@PathVariable("id") Long id, @PathVariable("lastName") String lastName) {
        // Your logic here to retrieve the ticket using both id and lastName
        Ticket ticket = bookingService.getByIdAndLastName(id, lastName);

        if (ticket != null) {
            return new ResponseEntity<>(ticket, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @GetMapping("/get/{seatId}")
    public ResponseEntity<Ticket> getTicket(@PathVariable("seatId") String id) {
        // Your logic here to retrieve the ticket using both id and lastName
        Ticket ticket = bookingService.getBySeatId(id);

        if (ticket != null) {
            return new ResponseEntity<>(ticket, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @GetMapping("/getByFlightId/{flightId}")
    public ResponseEntity<List<Ticket>> getTicketsByFlightId(@PathVariable("flightId") Long flightId) {
        List<Ticket> tickets = bookingService.getByFlightId(flightId);

        if (!tickets.isEmpty()) {
            return new ResponseEntity<>(tickets, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    

    
    @DeleteMapping("/delete/{id}/{lastName}")
    public ResponseEntity<String> deleteTicket(@PathVariable Long id, @PathVariable String lastName) {
        boolean deleted = bookingService.deleteByIdAndLastName(id, lastName);

        if (deleted) {
            return new ResponseEntity<>("Ticket deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Ticket not found or could not be deleted", HttpStatus.NOT_FOUND);
        }
    }

    // Additional methods can be added here for other operations like updating or deleting tickets

    
}
