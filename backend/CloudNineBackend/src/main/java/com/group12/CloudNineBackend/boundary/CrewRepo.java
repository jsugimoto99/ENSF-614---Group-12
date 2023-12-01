package com.group12.CloudNineBackend.boundary;

import org.springframework.data.jpa.repository.JpaRepository;
import com.group12.CloudNineBackend.domain.Crew;

/**
 * @author Jeremy Sugimoto
 *
 */
public interface CrewRepo extends JpaRepository<Crew, Integer> {
	void deleteById(Long id);

}
