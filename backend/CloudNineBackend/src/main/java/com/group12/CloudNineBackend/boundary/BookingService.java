package com.group12.CloudNineBackend.boundary;

import com.group12.CloudNineBackend.domain.Ticket;
import java.util.List;

public interface BookingService {
    public Ticket addTicket(Ticket ticket);
    List<Ticket> getAllTickets();
    
    public void deleteTicket(Ticket ticket);
    
    // Additional methods like updateTicket, deleteTicket, etc.
}
