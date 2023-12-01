package com.group12.CloudNineBackend.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(name = "locations", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"code"}),
})
public class Location {
	@Id
	private String code;
	private String city;
	private String Country;
	/**
	 * @return the country
	 */
	public String getCountry() {
		return Country;
	}
	/**
	 * @param country the country to set
	 */
	public void setCountry(String country) {
		Country = country;
	}
	/**
	 * @return the city
	 */
	public String getCity() {
		return city;
	}
	/**
	 * @param city the city to set
	 */
	public void setCity(String city) {
		this.city = city;
	}
	/**
	 * @return the code
	 */
	public String getCode() {
		return code;
	}
	/**
	 * @param code the code to set
	 */
	public void setCode(String code) {
		this.code = code;
	}

}
