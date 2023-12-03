package com.group12.CloudNineBackend.boundary;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;
import org.springframework.util.StreamUtils;
import com.group12.CloudNineBackend.boundary.EmailService;
import com.group12.CloudNineBackend.domain.Promotion;

import java.math.BigDecimal;
import java.nio.charset.StandardCharsets;
import org.springframework.core.io.Resource;


import jakarta.mail.internet.MimeMessage;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;


@Service
public class EmailServiceImpl implements EmailService{
	
	@Value("${spring.mail.username}")
	private String fromEmail;
	
	@Autowired
	private JavaMailSender javaMailSender;
	
	@Autowired
	private ResourceLoader resourceLoader;
	
	@Override
	public String sendTicketMail(String toEmail, Long ticketId, BigDecimal price, String destination, String departure, String seatId, String fName, String lName) {
		// TODO Auto-generated method stub
		try {
			MimeMessage mimeMessage = javaMailSender.createMimeMessage();
			
			MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
			
			mimeMessageHelper.setFrom(fromEmail);
			mimeMessageHelper.setTo(toEmail);
			mimeMessageHelper.setSubject("Your E-Ticket Confirmation");
			
			
            Resource resource = resourceLoader.getResource("classpath:ticket2.html");
            
            String content = StreamUtils.copyToString(resource.getInputStream(), StandardCharsets.UTF_8);
	   

            content = content.replace("[ticketId]", String.valueOf(ticketId))
                    .replace("[price]", String.valueOf(price))
                    .replace("[destination]", destination)
                    .replace("[seat]", seatId)
                    .replace("[fname]", fName)
                    .replace("[lname]", lName)
                    .replace("[departure]", departure); // Note: Make sure the placeholder in HTML matches this key

            
            mimeMessageHelper.setText(content, true); // Set true for HTML content

			
			javaMailSender.send(mimeMessage);
			
			return "mail send";
			
		}catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public String sendPromoEmail(String fName, String toEmail, String description, String code) {
		try {
			MimeMessage mimeMessage = javaMailSender.createMimeMessage();
			
			MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
			
			mimeMessageHelper.setFrom(fromEmail);
			mimeMessageHelper.setTo(toEmail);
			mimeMessageHelper.setSubject("Here is your CloudNine Promo!");
			
			Resource resource = resourceLoader.getResource("classpath:promo.html");
			
            String content = StreamUtils.copyToString(resource.getInputStream(), StandardCharsets.UTF_8);
            
            content = content
                    .replace("[User Name]", fName)
                    .replace("[Promotion Description]", description)
                    .replace("[Promo Code]", code); // Note: Make sure the placeholder in HTML matches this key
			
            mimeMessageHelper.setText(content, true);
            
            javaMailSender.send(mimeMessage);
            
			return "mail send";
		}catch (Exception e) {
			throw new RuntimeException(e);
		}
		
	}
	


}
