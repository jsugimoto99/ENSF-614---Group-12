package com.group12.CloudNineBackend.boundary;

import com.group12.CloudNineBackend.domain.BookingRequest;
import com.group12.CloudNineBackend.domain.Ticket;
import java.util.List;

public interface BookingService {
    public Ticket addTicket(BookingRequest bookingRequest);
    List<Ticket> getAllTickets();
    
    public void deleteTicket(Ticket ticket);
    
    // Additional methods like updateTicket, deleteTicket, etc.
}
