package com.group12.CloudNineBackend.boundary;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.group12.CloudNineBackend.domain.Aircraft;

/**
 * @author Jeremy Sugimoto
 *
 */
public interface AircraftRepo extends JpaRepository<Aircraft, Long> {
	void deleteById(int id);

	List<Aircraft> findByFlightIdIsNull();

	Aircraft getByFlightId(Long id);

}
