package com.group12.CloudNineBackend.boundary;

import org.springframework.data.jpa.repository.JpaRepository;
import com.group12.CloudNineBackend.domain.Seat;

public interface SeatRepo extends JpaRepository<Seat, Integer>{

	void deleteById(int id);

}
