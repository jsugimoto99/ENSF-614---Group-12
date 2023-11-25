package com.group12.CloudNineBackend.boundary;

public interface EmailService {

	String sendMail(String to, int ticketId, String price, String destination, String seat);

}
