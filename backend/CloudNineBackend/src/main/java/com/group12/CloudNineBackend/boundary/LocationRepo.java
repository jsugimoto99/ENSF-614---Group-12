package com.group12.CloudNineBackend.boundary;

import org.springframework.data.jpa.repository.JpaRepository;
import com.group12.CloudNineBackend.domain.Location;

/**
 * @author Jeremy Sugimoto
 *
 */
public interface LocationRepo extends JpaRepository<Location, Integer> {

}
