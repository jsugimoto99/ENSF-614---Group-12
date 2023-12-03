package com.group12.CloudNineBackend.boundary;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.group12.CloudNineBackend.domain.Ticket;

@Repository
public interface TicketRepo extends JpaRepository<Ticket, Long> {

//	void deleteByTicketId(Long id);

	Ticket getByTicketId(Long id);

	Ticket getByTicketIdAndLastName(Long id, String lastName);

	boolean existsByTicketIdAndLastName(Long id, String lastName);

	List<Ticket> findByFlightId(Long flightId);

	
	Optional<Ticket> findByTicketIdAndLastName(Long ticketId, String lastName);
	
	@Modifying
	@Query("DELETE FROM Ticket t WHERE t.ticketId = :ticketId")
	void deleteByTicketId(@Param("ticketId") Long ticketId);

	@Modifying
    @Query("DELETE FROM Ticket t WHERE t.ticketId = :ticketId AND t.lastName = :lastName")
    void deleteByTicketIdAndLastName(@Param("ticketId") Long ticketId, @Param("lastName") String lastName);
	

	Ticket findBySeatSeatId(String id);

	List<Ticket> getAllByFlightFlightId(Long flightId);
	
}
