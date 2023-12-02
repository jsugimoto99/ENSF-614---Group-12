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
	String member3;
	String member4;
	@OneToOne
    @JoinColumn(name = "flightId")
    private Flight flight;
	
	public void setFlight(Flight flight) {
		this.flight = flight;
		
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Flight getFlight() {
		return flight;
	}

	public String getMember1() {
		return member1;
	}

	public void setMember1(String member1) {
		this.member1 = member1;
	}

	public String getMember2() {
		return member2;
	}

	public void setMember2(String member2) {
		this.member2 = member2;
	}

	public String getMember3() {
		return member3;
	}

	public void setMember3(String member3) {
		this.member3 = member3;
	}

	public String getMember4() {
		return member4;
	}

	public void setMember4(String member4) {
		this.member4 = member4;
	}
	
	
	
}
