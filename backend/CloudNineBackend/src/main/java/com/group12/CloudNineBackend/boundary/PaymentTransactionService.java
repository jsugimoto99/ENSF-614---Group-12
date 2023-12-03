package com.group12.CloudNineBackend.boundary;

import java.math.BigDecimal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group12.CloudNineBackend.domain.PaymentTransaction;
import com.group12.CloudNineBackend.domain.PaymentTransactionRequest;
import com.group12.CloudNineBackend.domain.Seat;
import com.group12.CloudNineBackend.domain.Ticket;

@Service
public class PaymentTransactionService {

    @Autowired
    private PaymentTransactionRepo paymentTransactionRepo;

    @Autowired
   private TicketRepo ticketRepo;
    
    public Long getTransactionIdByTicketId(Long ticketId) {
    	PaymentTransaction paymentTransaction = paymentTransactionRepo.findByTicket_TicketId(ticketId);
        return paymentTransaction != null ? paymentTransaction.getTransactionId() : null;
    }

    public PaymentTransaction processPaymentTransaction(PaymentTransactionRequest request) {
        // Example of fetching a ticket based on the ticketId from the request
        // and performing some validation or business logic
        
        // Create a new PaymentTransaction object
        PaymentTransaction transaction = new PaymentTransaction();
        transaction.setCardNumber(request.getCardNumber());
        transaction.setCvv(request.getCvv());
        transaction.setExpiryDate(request.getExpiryDate());
        transaction.setName(request.getName());
        transaction.setAmount(request.getAmount());
        // Set properties of transaction from the request
        // e.g., transaction.setAmount(calculateAmount(ticket, request));
        // ...

        // Save the transaction to the database
        paymentTransactionRepo.save(transaction);

        // Additional business logic as required
        // ...

//        emailService.sendMail
        
        return transaction;
    }

    public BigDecimal getPriceByTicketId(Long ticketId) {
        PaymentTransaction paymentTransactionRequest = paymentTransactionRepo.findByTicket_TicketId(ticketId);// method to retrieve PaymentTransactionRequest by seatId
        return paymentTransactionRequest != null ? paymentTransactionRequest.getAmount() : null;
    }
 
    public PaymentTransaction paymentTransactionByTicketId(Long ticketId) {
    PaymentTransaction paymentTransactionRequest = paymentTransactionRepo.findByTicket_TicketId(ticketId);// method to retrieve PaymentTransactionRequest by seatId
    return paymentTransactionRequest != null ? paymentTransactionRequest : null;
    }
    
    // Additional service methods can be added here
}
