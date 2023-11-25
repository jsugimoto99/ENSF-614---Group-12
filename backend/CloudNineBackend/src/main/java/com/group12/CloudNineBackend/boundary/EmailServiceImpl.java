package com.group12.CloudNineBackend.boundary;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;
import org.springframework.util.StreamUtils;
import com.group12.CloudNineBackend.boundary.EmailService;

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
	public String sendMail(String to, int ticketId, String price, String destination, String seat) {
		// TODO Auto-generated method stub
		try {
			MimeMessage mimeMessage = javaMailSender.createMimeMessage();
			
			MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
			
			mimeMessageHelper.setFrom(fromEmail);
			mimeMessageHelper.setTo(to);
			mimeMessageHelper.setSubject("Your E-Ticket Confirmation");
			
            Resource resource = resourceLoader.getResource("classpath:ticket2.html");
            
            String content = StreamUtils.copyToString(resource.getInputStream(), StandardCharsets.UTF_8);
	   

            content = content.replace("[ticketId]", String.valueOf(ticketId))
                    .replace("[price]", price)
                    .replace("[destination]", destination)
                    .replace("[seat]", seat);
            
            mimeMessageHelper.setText(content, true); // Set true for HTML content

			
			javaMailSender.send(mimeMessage);
			
			return "mail send";
			
		}catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

}
