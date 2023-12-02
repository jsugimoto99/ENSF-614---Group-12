package com.group12.CloudNineBackend.boundary;

import java.math.BigDecimal;

public interface EmailService {

	String sendMail(String toEmail, Long ticketId, BigDecimal price, String destination, String departure, String seatId, String fName, String lName);

}
