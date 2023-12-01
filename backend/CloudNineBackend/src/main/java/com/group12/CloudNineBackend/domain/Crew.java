package com.group12.CloudNineBackend.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Crew {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	String member1;
	String member2;
	String member5;
	String member4;
	@OneToOne
    @JoinColumn(name = "flightId")
    private Flight flight;
	
}
