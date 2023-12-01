package com.group12.CloudNineBackend.domain;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Aircraft {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long aircraftId;
	@OneToMany(mappedBy = "aircraft", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Seat> seats = new ArrayList<>();
	@OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "flight_id")
    private Flight flight;
	private String model;
	private int businessSeatsPerRow;
	private int businessRows;
	private int seatsPerRow;
	private int comfortRows;
	private int economyRows;

	public Long getId() {
		return aircraftId;
	}

	/**
	 * @return the model
	 */
	public String getModel() {
		return model;
	}

	/**
	 * @param model the model to set
	 */
	public void setModel(String model) {
		this.model = model;
	}

	/**
	 * @return the businessSeatsPerRow
	 */
	public int getBusinessSeatsPerRow() {
		return businessSeatsPerRow;
	}

	/**
	 * @param businessSeatsPerRow the businessSeatsPerRow to set
	 */
	public void setBusinessSeatsPerRow(int businessSeatsPerRow) {
		this.businessSeatsPerRow = businessSeatsPerRow;
	}

	/**
	 * @return the businessRows
	 */
	public int getBusinessRows() {
		return businessRows;
	}

	/**
	 * @param businessRows the businessRows to set
	 */
	public void setBusinessRows(int businessRows) {
		this.businessRows = businessRows;
	}

	/**
	 * @return the seatsPerRow
	 */
	public int getSeatsPerRow() {
		return seatsPerRow;
	}

	/**
	 * @param seatsPerRow the seatsPerRow to set
	 */
	public void setSeatsPerRow(int seatsPerRow) {
		this.seatsPerRow = seatsPerRow;
	}

	/**
	 * @return the comfortRows
	 */
	public int getComfortRows() {
		return comfortRows;
	}

	/**
	 * @param comfortRows the comfortRows to set
	 */
	public void setComfortRows(int comfortRows) {
		this.comfortRows = comfortRows;
	}

	/**
	 * @return the economyRows
	 */
	public int getEconomyRows() {
		return economyRows;
	}

	/**
	 * @param economyRows the economyRows to set
	 */
	public void setEconomyRows(int economyRows) {
		this.economyRows = economyRows;
	}

	public void setFlight(Flight flight) {
		this.flight = flight;
		
	}
	public void removeFlight() {
		this.flight = null;
	}

}
