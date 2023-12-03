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
    private EmailService emailService;
    
    @Autowired
    private SeatRepo seatRepository;
    
    @Autowired
    private FlightRepo flightRepository;
    

    @Override
    public Ticket addTicket(BookingRequest request) {

    	String seat_id = request.getSeatId();
        long flight_id = request.getFlightId();
        
        // Fetch the Seat and Flight from the repositories
        Seat seat = seatRepository.findById(seat_id)
                        .orElseThrow();
        Flight flight = flightRepository.findById(flight_id)
                        .orElseThrow();
        
        
        Ticket ticket = new Ticket();
        ticket.setSeat(seat);
        ticket.setFlight(flight);
        ticket.setToEmail(request.gettoEmail());
        ticket.setFirstName(request.getFirstName());
        ticket.setLastName(request.getLastName());
        ticket.setInsurance(request.getInsurance());
        // ... set other fields on the ticket
        
        
        // Save the ticket
        Ticket savedTicket = ticketRepository.save(ticket);
        
        emailService.sendTicketMail(savedTicket.getToEmail(),
        		(savedTicket.getTicketId()),
        		savedTicket.getPrice(),
        		savedTicket.getDestination(),
        		savedTicket.getDeparture(),
        		savedTicket.getSeat().getSeatId(),
        		savedTicket.getFirstName(),
        		savedTicket.getLastName()
        		);
        		
        
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
		return ticketRepository.getBySeatSeatId(id);
	}

	@Override
	public List<Ticket> getByFlightId(Long flightId) {
		// TODO Auto-generated method stub
		return ticketRepository.getAllByFlightFlightId(flightId);
	}

	

    // Implement other methods defined in the interface
}
