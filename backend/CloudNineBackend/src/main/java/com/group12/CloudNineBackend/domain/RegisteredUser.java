package com.group12.CloudNineBackend.domain;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
@DiscriminatorValue("RegisteredUser")
public class RegisteredUser extends User {

    // Fields specific to credit card information
    @Column(name = "creditCardNumber")
    private String creditCardNumber;

    @Column(name = "creditCardExp")
    private String creditCardExp;

    @Column(name = "creditCardCvv")
    private int creditCardCvv;

    // Constructors
    public RegisteredUser() {
        this.setRole("registered user");  // Override the role for registered users
    }

    /**
     * @return the creditCardCvv
     */
    public int getCreditCardCvv() {
        return creditCardCvv;
    }

    /**
     * @param creditCardCvv the creditCardCvv to set
     */
    public void setCreditCardCvv(int creditCardCvv) {
        this.creditCardCvv = creditCardCvv;
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

    /**
     * @return the creditCardExp
     */
    public String getCreditCardExp() {
        return creditCardExp;
    }

    /**
     * @param creditCardExp the creditCardExp to set
     */
    public void setCreditCardExp(String creditCardExp) {
        this.creditCardExp = creditCardExp;
    }

	public void setId(Long id) {
		this.id = id;
		
	}
}
