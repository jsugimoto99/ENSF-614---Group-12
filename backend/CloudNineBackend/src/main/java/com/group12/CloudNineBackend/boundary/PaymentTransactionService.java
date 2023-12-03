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
    private SeatRepo seatRepository;
    
    public Long getTransactionIdBySeatId(String seatId) {
    	PaymentTransaction paymentTransaction = paymentTransactionRepo.findBySeat_SeatId(seatId);
        return paymentTransaction != null ? paymentTransaction.getTransactionId() : null;
    }

    public PaymentTransaction processPaymentTransaction(PaymentTransactionRequest request) {
        // Example of fetching a ticket based on the ticketId from the request
        // and performing some validation or business logic
        String seat_id = request.getSeatId();

        Seat seat = seatRepository.findById(seat_id)
        		.orElseThrow();
        System.out.println(seat.getSeatId()+ " HI");
        
        // Create a new PaymentTransaction object
        PaymentTransaction transaction = new PaymentTransaction();
        transaction.setCardNumber(request.getCardNumber());
        transaction.setCvv(request.getCvv());
        transaction.setExpiryDate(request.getExpiryDate());
        transaction.setName(request.getName());
        transaction.setSeat(seat);
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

    public BigDecimal getPriceBySeatId(String seatId) {
        PaymentTransaction paymentTransactionRequest = paymentTransactionRepo.findBySeat_SeatId(seatId);// method to retrieve PaymentTransactionRequest by seatId
        return paymentTransactionRequest != null ? paymentTransactionRequest.getAmount() : null;
    }
 
    // Additional service methods can be added here
}
