package com.group12.CloudNineBackend.boundary;

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
        transaction.setFirstName(request.getFName());
        transaction.setLastName(request.getLName());
        transaction.setSeat(seat);
        // Set properties of transaction from the request
        // e.g., transaction.setAmount(calculateAmount(ticket, request));
        // ...

        // Save the transaction to the database
        paymentTransactionRepo.save(transaction);

        // Additional business logic as required
        // ...

        return transaction;
    }

    // Additional service methods can be added here
}
