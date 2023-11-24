package com.group12.CloudNineBackend.domain;

import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
public class RegisteredUser extends User {
	// Fields specific to credit card information
    private String creditCardNumber;
    private String creditCardExpirationDate;
    private int creditCardCVV;

    // Constructors
    public RegisteredUser() {
        this.role = "registered user";  // Override the role for registered users
    }

	public int getCreditCardCVV() {
		return creditCardCVV;
	}

	public void setCreditCardCVV(int creditCardCVV) {
		this.creditCardCVV = creditCardCVV;
	}

	public String getCreditCardExpirationDate() {
		return creditCardExpirationDate;
	}

	public void setCreditCardExpirationDate(String creditCardExpirationDate) {
		this.creditCardExpirationDate = creditCardExpirationDate;
	}

	/**
	 * @return the creditCardNumber
	 */
	public String getCreditCardNumber() {
		return creditCardNumber;
	}

	/**
	 * @param creditCardNumber the creditCardNumber to set
	 */
	public void setCreditCardNumber(String creditCardNumber) {
		this.creditCardNumber = creditCardNumber;
	}
	
}