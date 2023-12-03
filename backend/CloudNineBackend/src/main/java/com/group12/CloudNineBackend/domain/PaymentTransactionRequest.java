package com.group12.CloudNineBackend.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PaymentTransactionRequest {

	@JsonProperty("fName")
    private String fName;
	
	@JsonProperty("lName")
    private String lName;
	
	@JsonProperty("cardNumber")
    private String cardNumber;
	
	@JsonProperty("expiryDate")
    private String expiryDate;
	
	@JsonProperty("cvv")
    private int cvv;
	
	@JsonProperty("seat_id")
    private String seatId;

    // No-args constructor
    public PaymentTransactionRequest() {
    }

    // All-args constructor
//    public PaymentTransactionRequest(String fName, String lName, String cardNumber, String expiryDate, int cvv, String seatId) {
//        this.fName = fName;
//        this.lName = lName;
//        this.cardNumber = cardNumber;
//        this.expiryDate = expiryDate;
//        this.cvv = cvv;
//        this.seatId = seatId;
//    }

    // Getters and setters
    public String getFName() {
        return fName;
    }

    public void setFName(String fName) {
        this.fName = fName;
    }

    public String getLName() {
        return lName;
    }

    public void setLName(String lName) {
        this.lName = lName;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(String expiryDate) {
        this.expiryDate = expiryDate;
    }

    public int getCvv() {
        return cvv;
    }

    public void setCvv(int cvv) {
        this.cvv = cvv;
    }

    public String getSeatId() {
        return seatId;
    }

    public void setSeatId(String seatId) {
        this.seatId = seatId;
    }

    // toString method for debugging purposes
    @Override
    public String toString() {
        return "PaymentTransactionRequest{" +
                "fName='" + fName + '\'' +
                ", lName='" + lName + '\'' +
                ", cardNumber='" + cardNumber + '\'' +
                ", expiryDate='" + expiryDate + '\'' +
                ", cvv=" + cvv +
                ", seatId='" + seatId + '\'' +
                '}';
    }
}
