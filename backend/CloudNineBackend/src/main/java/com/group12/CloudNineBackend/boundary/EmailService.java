package com.group12.CloudNineBackend.boundary;

import java.math.BigDecimal;

import com.group12.CloudNineBackend.domain.Promotion;

public interface EmailService {

	String sendTicketMail(String toEmail, Long ticketId, BigDecimal price, String destination, String departure, String seatId, String fName, String lName);

	String sendPromoEmail(String fName, String toEmail, String description, String code);

	
}
