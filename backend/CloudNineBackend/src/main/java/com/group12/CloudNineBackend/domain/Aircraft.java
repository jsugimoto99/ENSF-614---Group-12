package com.group12.CloudNineBackend.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Aircraft {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;	
	
//	public Aircraft() {
//		generateSeatIDs(id, 1, 2, 2,"first");
//		generateSeatIDs(id, 3, 2, 2,"business");
//		generateSeatIDs(id, 5, 2, 2,"economy");
//		
//	}
//	public static void generateSeatIDs(Long id, int startRow, int numRows, int seatsPerRow, String type) {
//        for (int row = startRow; row <= numRows; row++) {
//            for (char seat = 'A'; seat < 'A' + seatsPerRow; seat++) {
//                String seatId = row + "" + seat;
//                new Seat(id,seatId, type);
//                //seatRepo.save(seat);
//            }
//            System.out.println(); // Move to the next row
//        }
//	}

}
