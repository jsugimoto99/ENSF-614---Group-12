package com.group12.CloudNineBackend.boundary;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.group12.CloudNineBackend.domain.Crew;

/**
 * @author Jeremy Sugimoto
 *
 */
public interface CrewRepo extends JpaRepository<Crew, Long> {
	void deleteById(Long id);

	List<Crew> findByFlightIdIsNull();

}
