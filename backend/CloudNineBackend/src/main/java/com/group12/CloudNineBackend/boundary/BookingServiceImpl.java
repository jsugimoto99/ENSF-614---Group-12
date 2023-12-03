package com.group12.CloudNineBackend.boundary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group12.CloudNineBackend.domain.Seat;
import com.group12.CloudNineBackend.domain.Ticket;

import jakarta.transaction.Transactional;

import com.group12.CloudNineBackend.domain.BookingRequest;
import com.group12.CloudNineBackend.domain.Flight;
import java.util.List;
import java.util.Optional;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private TicketRepo ticketRepository;
    
    @Autowired
    private SeatRepo seatRepository;
    
    @Autowired
    private FlightRepo flightRepository;
    
    @Autowired
    private EmailService emailService;
    
    @Autowired
    private PaymentTransactionService transaction;
    

    
    @Override
    public Ticket addTicket(BookingRequest request) {

    	String seat_id = request.getSeatId();
        Long flight_id = request.getFlightId();
        
        // Fetch the Seat and Flight from the repositories
        Seat seat = seatRepository.getBySeatId(seat_id)
                        .orElseThrow();
        Flight flight = flightRepository.getByFlightId(flight_id)
                        .orElseThrow();
        
        
        Ticket ticket = new Ticket();
        ticket.setSeat(seat);
        ticket.setFlight(flight);
        ticket.setToEmail(request.gettoEmail());
        ticket.setFirstName(request.getFirstName());
        ticket.setLastName(request.getLastName());
        ticket.setInsurance(request.getInsurance());
        // ... set other fields on the ticket
        ticket.setPaymentTransaction(transaction.paymentTransactionByTicketId(ticket.getTicketId()));
        
        // Save the ticket
        Ticket savedTicket = ticketRepository.save(ticket);
        		
        return savedTicket;
    }

    @Override
    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

	@Override
	public Ticket getByIdAndLastName(Long id, String lastName) {
        // Use the repository to fetch the ticket
        Optional<Ticket> ticketOptional = ticketRepository.findByTicketIdAndLastName(id, lastName);
        
        // Return the ticket if found, or null otherwise
        return ticketOptional.orElse(null);
    }

	@Override
	public Ticket getBySeatId(String id) {
		// TODO Auto-generated method stub
		return ticketRepository.findBySeatSeatId(id);
	}

	@Override
	public List<Ticket> getAllByFlightId(Long flightId) {
		// TODO Auto-generated method stub
		return ticketRepository.getAllByFlightFlightId(flightId);
	}

	@Override
	public void sendEmail(Ticket ticket) {
		emailService.sendTicketMail(ticket.getToEmail(),
        		(ticket.getTicketId()),
        		ticket.getDestination(),
        		ticket.getDeparture(),
        		ticket.getSeat().getSeatId(),
        		ticket.getFirstName(),
        		ticket.getLastName()
        		);
		
	}

	

    // Implement other methods defined in the interface
}
