package com.group12.CloudNineBackend.boundary;

import java.math.BigDecimal;

public interface EmailService {

	String sendMail(String toEmail, int ticketId, BigDecimal price, String destination, String seatId);

}
