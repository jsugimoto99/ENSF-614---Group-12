package com.group12.CloudNineBackend.boundary;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.group12.CloudNineBackend.domain.PaymentTransaction;
import com.group12.CloudNineBackend.domain.PaymentTransactionRequest;

@Repository
public interface PaymentTransactionRepo extends JpaRepository<PaymentTransaction, Long> {

    // Custom query methods can be added here if needed

	PaymentTransaction findByTicket_TicketId(Long TicketId);

	Optional<PaymentTransaction> findByTransactionId(Long transactionId);

	
}
