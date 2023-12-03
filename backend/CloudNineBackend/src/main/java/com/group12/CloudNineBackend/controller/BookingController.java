package com.group12.CloudNineBackend.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.group12.CloudNineBackend.boundary.BookingService;
import com.group12.CloudNineBackend.boundary.PaymentTransactionRepo;
import com.group12.CloudNineBackend.boundary.TicketService;
import com.group12.CloudNineBackend.domain.BookingRequest;
import com.group12.CloudNineBackend.domain.PaymentTransaction;
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
    private PaymentTransactionRepo transactionRepo;    
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
        Optional<PaymentTransaction> transactionOptional = transactionRepo.findByTransactionId(bookingRequest.getTransactionId());

        if (transactionOptional.isPresent()) {
            // Value is present, get the PaymentTransaction
            PaymentTransaction transaction = transactionOptional.get();
            Ticket createdTicket = bookingService.addTicket(bookingRequest);
            transaction.setTicket(createdTicket);
            transaction.setTicketId(createdTicket);
            transactionRepo.save(transaction);
            bookingService.sendEmail(createdTicket);
            
            
                return new ResponseEntity<>(createdTicket.getTicketId(), HttpStatus.CREATED);
        
            
        } else {
            throw new NoSuchElementException("PaymentTransaction not found for ID: " + bookingRequest.getTransactionId());
        }
    }

    /**
     * Handles HTTP GET requests to retrieve a list of all tickets.
     *
     * @return A list of Ticket objects representing all booked tickets.
     */
    @GetMapping("/getAll")
    public ResponseEntity<List<Map<String, Object>>> getAllTickets() {
       try {
    	List<Ticket> tickets = bookingService.getAllTickets();
    	List<Map<String,Object>> responseList = new ArrayList<>(); 
    	
    	for (Ticket ticket: tickets) {
    		Map<String, Object> ticketMap = new HashMap<>();
    		ticketMap.put("ticketId", ticket.getTicketId());
    		ticketMap.put("toEmail", ticket.getToEmail());
    		ticketMap.put("firstName", ticket.getFirstName());
    		ticketMap.put("lastName", ticket.getLastName());
    		ticketMap.put("insurance", ticket.getInsurance());
    		ticketMap.put("getPrice", ticket.getPrice());
    		ticketMap.put("seatId", ticket.getSeatId());
    		ticketMap.put("class", ticket.getSeatClass());
    		ticketMap.put("departure", ticket.getDeparture());
    		ticketMap.put("destination", ticket.getDestination());
    		responseList.add(ticketMap);
    	}
    	return new ResponseEntity<>(responseList, HttpStatus.OK);
    	
       } catch (Exception e) {
           return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }
    
    
    @GetMapping("/get/{id}/{lastName}")
    public ResponseEntity<Map<String, Object>> getTicket(@PathVariable("id") Long id, @PathVariable("lastName") String lastName) {
        // Your logic here to retrieve the ticket using both id and lastName
        Ticket ticket = bookingService.getByIdAndLastName(id, lastName);
        if (ticket != null) {
        Map<String, Object> ticketMap = new HashMap<>();
		ticketMap.put("ticketId", ticket.getTicketId());
		ticketMap.put("toEmail", ticket.getToEmail());
		ticketMap.put("firstName", ticket.getFirstName());
		ticketMap.put("lastName", ticket.getLastName());
		ticketMap.put("insurance", ticket.getInsurance());
		ticketMap.put("getPrice", ticket.getPrice());
		ticketMap.put("seatId", ticket.getSeatId());
		ticketMap.put("class", ticket.getSeatClass());
		ticketMap.put("departure", ticket.getDeparture());
		ticketMap.put("destination", ticket.getDestination());
        
           return new ResponseEntity<>(ticketMap, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @GetMapping("/get/{seatId}")
    public ResponseEntity<Map<String, Object>> getTicket(@PathVariable("seatId") String seatId) {
        // Your logic here to retrieve the ticket using both id and lastName
        Ticket ticket = bookingService.getBySeatId(seatId);
        if (ticket != null) {
            Map<String, Object> ticketMap = new HashMap<>();
    		ticketMap.put("ticketId", ticket.getTicketId());
    		ticketMap.put("toEmail", ticket.getToEmail());
    		ticketMap.put("firstName", ticket.getFirstName());
    		ticketMap.put("lastName", ticket.getLastName());
    		ticketMap.put("insurance", ticket.getInsurance());
    		ticketMap.put("getPrice", ticket.getPrice());
    		ticketMap.put("seatId", ticket.getSeatId());
    		ticketMap.put("class", ticket.getSeatClass());
    		ticketMap.put("departure", ticket.getDeparture());
    		ticketMap.put("destination", ticket.getDestination());
            
               return new ResponseEntity<>(ticketMap, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        }
    
    @GetMapping("/getByFlightId/{flightId}")
    public ResponseEntity<List<Map<String, Object>>> getTicketsByFlightId(@PathVariable("flightId") Long flightId) {
    	try {
    	List<Ticket> tickets = bookingService.getAllByFlightId(flightId);
        List<Map<String,Object>> responseList = new ArrayList<>(); 
    	
    	for (Ticket ticket: tickets) {
    		Map<String, Object> ticketMap = new HashMap<>();
    		ticketMap.put("ticketId", ticket.getTicketId());
    		ticketMap.put("toEmail", ticket.getToEmail());
    		ticketMap.put("firstName", ticket.getFirstName());
    		ticketMap.put("lastName", ticket.getLastName());
    		ticketMap.put("insurance", ticket.getInsurance());
    		ticketMap.put("getPrice", ticket.getPrice());
    		ticketMap.put("seatId", ticket.getSeatId());
    		ticketMap.put("class", ticket.getSeatClass());
    		ticketMap.put("departure", ticket.getDeparture());
    		ticketMap.put("destination", ticket.getDestination());
    		responseList.add(ticketMap);
    	}
    	return new ResponseEntity<>(responseList, HttpStatus.OK);
    	
       } catch (Exception e) {
           return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);       
           }
    }

    @GetMapping("/getSeatsByFlightId/{flightId}")
    public ResponseEntity<List <String>> getBookedSeatsByFlightId(@PathVariable("flightId") Long flightId) {
    	try {
    	List<Ticket> tickets = bookingService.getAllByFlightId(flightId);
        List<String> seatList = new ArrayList<>(); 
    	
    	for (Ticket ticket: tickets) {
    		seatList.add(ticket.getSeatId().substring(ticket.getSeatId().lastIndexOf('-') + 1));
    	}
    	return new ResponseEntity<>(seatList, HttpStatus.OK);
    	
       } catch (Exception e) {
           return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);       
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
