package com.group12.CloudNineBackend.boundary;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.group12.CloudNineBackend.domain.Ticket;

@Repository
public interface TicketRepo extends JpaRepository<Ticket, Long> {

	void deleteByTicketId(Long id);

	Ticket getByTicketId(Long id);

	Ticket getByTicketIdAndLastName(Long id, String lastName);

	boolean existsByTicketIdAndLastName(Long id, String lastName);

	List<Ticket> findByFlightId(Long flightId);

	Ticket getBySeatSeatId(String seatId);
	
}
