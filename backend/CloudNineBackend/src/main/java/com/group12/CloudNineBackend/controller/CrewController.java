package com.group12.CloudNineBackend.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.group12.CloudNineBackend.boundary.CrewRepo;
import com.group12.CloudNineBackend.boundary.FlightRepo;
import com.group12.CloudNineBackend.domain.Aircraft;
import com.group12.CloudNineBackend.domain.Crew;
import com.group12.CloudNineBackend.domain.Flight;

@RestController
@RequestMapping("/crew")
@CrossOrigin
public class CrewController {
	@Autowired
	private CrewRepo crewRepo;
	@Autowired
	private FlightRepo flightRepo;

	@PostMapping("/add")
	public ResponseEntity<Map<String, Object>> add(@RequestBody Crew crew) {
		Map<String, Object> response = new HashMap<>();

		// Save the aircraft to generate its ID
		crewRepo.save(crew);

		response.put("status", "success");
		response.put("message", "Crew added to database");
		return ResponseEntity.status(HttpStatus.OK).body(response);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Map<String, Object>> deleteCrew(@PathVariable Long id) {
		Map<String, Object> response = new HashMap<>();

		Optional<Crew> optionalCrew = crewRepo.findById(id);

		if (optionalCrew.isPresent()) {
			Crew crew = optionalCrew.get();
			crewRepo.delete(crew);

			response.put("status", "success");
			response.put("message", "Crew deleted from database");
			return ResponseEntity.status(HttpStatus.OK).body(response);
		} else {
			response.put("status", "error");
			response.put("message", "Crew not found");
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
		}
	}

	@GetMapping("/listAll")
	public ResponseEntity<List<Map<String, Object>>> getAllCrew() {
		try {
			List<Crew> crews = crewRepo.findAll();
			List<Map<String, Object>> responseList = new ArrayList<>();

			for (Crew crew : crews) {
				Map<String, Object> crewMap = new HashMap<>();

				// Check if the flight associated with the crew exists
				Flight flight = crew.getFlight();
				if (flight != null) {
					crewMap.put("flightId", flight.getId()); 
					crewMap.put("id", crew.getId());									
					crewMap.put("member1", crew.getMember1());
					crewMap.put("member2", crew.getMember2());
					crewMap.put("member3", crew.getMember3());
					crewMap.put("member4", crew.getMember4());
					responseList.add(crewMap);
				}else {
					crewMap.put("id", crew.getId());									
					crewMap.put("member1", crew.getMember1());
					crewMap.put("member2", crew.getMember2());
					crewMap.put("member3", crew.getMember3());
					crewMap.put("member4", crew.getMember4());
					responseList.add(crewMap);
				}
			}

				return new ResponseEntity<>(responseList, HttpStatus.OK);
			
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/listAllAvailable")
	public ResponseEntity<List<Map<String, Object>>> getAllAvailableCrew() {
		try {
			List<Crew> crews = crewRepo.findByFlightIdIsNull();
			;
			List<Map<String, Object>> responseList = new ArrayList<>();

			for (Crew crew : crews) {
				Map<String, Object> crewMap = new HashMap<>();

				// Check if the flight associated with the crew exists
				Flight flight = crew.getFlight();
				if (flight != null) {
					crewMap.put("flightId", flight.getId()); 
					crewMap.put("id", crew.getId());											
					crewMap.put("member1", crew.getMember1());
					crewMap.put("member2", crew.getMember2());
					crewMap.put("member3", crew.getMember3());
					crewMap.put("member4", crew.getMember4());
					responseList.add(crewMap);
				}else {
					crewMap.put("id", crew.getId());										
					crewMap.put("member1", crew.getMember1());
					crewMap.put("member2", crew.getMember2());
					crewMap.put("member3", crew.getMember3());
					crewMap.put("member4", crew.getMember4());
					responseList.add(crewMap);
				}
			}

			return new ResponseEntity<>(responseList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/assignFlight/{crewId}/{flightId}")
	public ResponseEntity<Map<String, Object>> assignFlight(@PathVariable Long crewId, @PathVariable Long flightId) {
		Map<String, Object> response = new HashMap<>();

		// Retrieve crew and flight entities from repositories
		Optional<Crew> optionalCrew = crewRepo.findById(crewId);
		Optional<Flight> optionalFlight = flightRepo.findById(flightId);

		if (optionalCrew.isPresent() && optionalFlight.isPresent()) {
			Crew crew = optionalCrew.get();
			Flight flight = optionalFlight.get();

			// Assign the flight to the crew
			crew.setFlight(flight);
			crewRepo.save(crew); // Update the crew entity

			response.put("status", "success");
			response.put("message", "Flight assigned to crew");
			return ResponseEntity.status(HttpStatus.OK).body(response);
		} else {
			response.put("status", "error");
			response.put("message", "Crew or Flight not found");
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
		}
	}

}
