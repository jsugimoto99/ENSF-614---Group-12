package com.group12.CloudNineBackend.boundary;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.util.StreamUtils;

import com.group12.CloudNineBackend.domain.PaymentTransaction;
import com.group12.CloudNineBackend.domain.Ticket;

import jakarta.mail.internet.MimeMessage;
import jakarta.transaction.Transactional;

import org.springframework.core.io.ResourceLoader;

import java.nio.charset.StandardCharsets;
import org.springframework.core.io.Resource;


@Service
public class TicketService {

    @Autowired
    private TicketRepo ticketRepo;

    @Autowired
    private JavaMailSender emailSender;
    
    @Autowired
    private ResourceLoader resourceLoader;
	
    @Transactional
    public boolean deleteByTicketIdAndLastName(Long ticketId, String lastName) {
        try {
        	System.out.println("Try\n");
        	Optional<Ticket> ticketOptional = ticketRepo.findByTicketIdAndLastName(ticketId, lastName);
        	System.out.println("Ticket is Available\n");
            if (ticketOptional.isPresent()) {
                Ticket ticket = ticketOptional.get();

                ticketRepo.deleteByTicketIdAndLastName(ticketId, lastName);
                System.out.println("Ticket Deleted");

                sendDeletionEmail(ticket);
                return true;
            }
            return false;
            
        } catch (Exception e) {
            // Log the exception for debugging
            System.out.println("Error deleting ticket: "+ e);
            return false;
        }
    }


    private void sendDeletionEmail(Ticket ticket) {
        try {
            MimeMessage mimeMessage = emailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);

            mimeMessageHelper.setFrom("fromEmail"); // Replace with your from email
            mimeMessageHelper.setTo(ticket.getToEmail());
            mimeMessageHelper.setSubject("Ticket Cancellation Confirmation");

            // Assuming you have a template called 'cancellation.html' in the resources folder
            Resource resource = resourceLoader.getResource("classpath:cancellation.html");

            String content = StreamUtils.copyToString(resource.getInputStream(), StandardCharsets.UTF_8);
            
            // Replace placeholders in your HTML template with actual values
            content = content
                    .replace("[First Name]", ticket.getFirstName())
                    .replace("[Last Name]", ticket.getLastName())
                    .replace("[Ticket ID]", ticket.getTicketId().toString());

            mimeMessageHelper.setText(content, true);
            
            emailSender.send(mimeMessage);

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
