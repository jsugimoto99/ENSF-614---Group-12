package com.group12.CloudNineBackend.boundary;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.group12.CloudNineBackend.domain.Seat;

public interface SeatRepo extends JpaRepository<Seat, String>{


	void deleteBySeatId(String id);

	Optional<Seat> getBySeatId(String seat_id);

}
