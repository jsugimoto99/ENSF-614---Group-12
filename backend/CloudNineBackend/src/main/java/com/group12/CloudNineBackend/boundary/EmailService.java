package com.group12.CloudNineBackend.boundary;

public interface EmailService {

	String sendMail(String to, int ticketId, int price, String destination, String seatId);

}
