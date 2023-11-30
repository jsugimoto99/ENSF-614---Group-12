package com.group12.CloudNineBackend.boundary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.group12.CloudNineBackend.domain.Ticket;

@Repository
public interface TicketRepo extends JpaRepository<Ticket, Long> {
    // You can define custom query methods here if needed
}
