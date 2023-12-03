package com.group12.CloudNineBackend.boundary;

public interface EmailService {

	String sendTicketMail(String toEmail, Long ticketId, String destination, String departure, String seatId, String fName, String lName);

	String sendPromoEmail(String fName, String toEmail, String description, String code);

	
}
