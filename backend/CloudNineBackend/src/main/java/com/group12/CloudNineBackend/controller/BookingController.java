package com.group12.CloudNineBackend.controller;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.group12.CloudNineBackend.boundary.BookingService;
import com.group12.CloudNineBackend.boundary.TicketRepo;
import com.group12.CloudNineBackend.boundary.TicketService;
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
    
    @Autowired
    private TicketService ticketService;

    /**
     * Handles HTTP POST requests to create a new ticket.
     *
     * @param ticket The ticket object to be created. Sent as a request body.
     * @return A ResponseEntity indicating the result of the operation.
     */
    @PostMapping("/add")
    public ResponseEntity<Long> addTicket(@RequestBody BookingRequest bookingRequest) {
        
        System.out.println("Received booking request: " + bookingRequest);
    	
    	Ticket createdTicket = bookingService.addTicket(bookingRequest);
            return new ResponseEntity<>(createdTicket.getTicketId(), HttpStatus.CREATED);
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
    public ResponseEntity<Ticket> getTicket(@PathVariable("seatId") String seatId) {
        // Your logic here to retrieve the ticket using both id and lastName
        Ticket ticket = bookingService.getBySeatId(seatId);

        if (ticket != null) {
            return new ResponseEntity<>(ticket, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @GetMapping("/getByFlightId/{flightId}")
    public ResponseEntity<Map<String, Object>> getTicketsByFlightId(@PathVariable("flightId") Long flightId) {
        List<Ticket> tickets = bookingService.getByFlightId(flightId);

        Map<String, Object> response = new HashMap<>();

        if (!tickets.isEmpty()) {
            response.put("tickets", tickets);
            response.put("message", "Tickets found for flight ID: " + flightId);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            response.put("message", "No tickets found for flight ID: " + flightId);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }


    

   
    @DeleteMapping("/delete/{ticketId}/{lastName}")
    public ResponseEntity<String> deleteTicket(@PathVariable Long ticketId, @PathVariable String lastName) {
        try {
            // Use the service layer to delete the ticket
            boolean isDeleted = ticketService.deleteByTicketIdAndLastName(ticketId, lastName);

            // Return the appropriate response entity based on the deletion result
            if (isDeleted) {
                return new ResponseEntity<>("Ticket deleted successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Ticket not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            // In case of any exception, return an internal server error response
            return new ResponseEntity<>("Error occurred during ticket deletion", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    

    // Additional methods can be added here for other operations like updating or deleting tickets
    
}
