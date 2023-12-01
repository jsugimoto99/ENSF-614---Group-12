package com.group12.CloudNineBackend.boundary;

import org.springframework.data.jpa.repository.JpaRepository;


import com.group12.CloudNineBackend.domain.Aircraft;

/**
 * @author Jeremy Sugimoto
 *
 */
public interface AircraftRepo extends JpaRepository<Aircraft, Integer> {
	void deleteById(int id);

}
