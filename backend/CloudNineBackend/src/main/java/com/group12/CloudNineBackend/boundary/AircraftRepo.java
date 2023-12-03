package com.group12.CloudNineBackend.boundary;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


import com.group12.CloudNineBackend.domain.Aircraft;

/**
 * @author Jeremy Sugimoto
 *
 */
public interface AircraftRepo extends JpaRepository<Aircraft, Long> {
	void deleteById(Long id);

	List<Aircraft> findByFlightIdIsNull();

	Aircraft getByFlightId(Long id);

	Optional<Aircraft> findByFlightId(Long flightId);

}
