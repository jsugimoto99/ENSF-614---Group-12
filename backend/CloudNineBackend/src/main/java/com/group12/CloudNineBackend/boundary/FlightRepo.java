package com.group12.CloudNineBackend.boundary;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.group12.CloudNineBackend.domain.Flight;
import com.group12.CloudNineBackend.domain.Seat;

/**
 * Repository interface for accessing and managing Flight entities in the database.
 * This interface extends JpaRepository, providing CRUD (Create, Read, Update, Delete)
 * operations for the Flight entity.
 * 
 * @author Jeremy Sugimoto
 * 
 */
@Repository
public interface FlightRepo extends JpaRepository<Flight, Long> {

	void deleteById(Long id);

	List<Flight> findByDateAndDepartLocAndDestLoc(Date depart_date, String depart_loc, String dest_loc);

	Optional<Flight> getByFlightId(Long flight_id);


}
