package com.group12.CloudNineBackend.boundary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.group12.CloudNineBackend.domain.Ticket;
import java.util.List;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private TicketRepo ticketRepository;
    
    @Autowired
    private EmailService emailService;

    @Override
    public Ticket addTicket(Ticket ticket) {
        Ticket savedTicket = ticketRepository.save(ticket);
        
        emailService.sendMail(savedTicket.getToEmail(),
        		(savedTicket.getTicketId()),
        		savedTicket.getPrice(),
        		savedTicket.getDestination(),
        		savedTicket.getSeat());
        
        return savedTicket;
    }

    @Override
    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

	@Override
	public void deleteTicket(Ticket ticket) {
		// TODO Auto-generated method stub
		ticketRepository.delete(ticket);
	}
	
	

    // Implement other methods defined in the interface
}
