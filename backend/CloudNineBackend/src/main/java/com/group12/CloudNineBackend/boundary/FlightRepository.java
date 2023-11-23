package com.group12.CloudNineBackend.boundary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.group12.CloudNineBackend.domain.Flight;

/**
 * Repository interface for accessing and managing Flight entities in the database.
 * This interface extends JpaRepository, providing CRUD (Create, Read, Update, Delete)
 * operations for the Flight entity.
 * 
 * @author Jeremy Sugimoto
 * 
 */
@Repository
public interface FlightRepository extends JpaRepository<Flight, Integer> {

}
