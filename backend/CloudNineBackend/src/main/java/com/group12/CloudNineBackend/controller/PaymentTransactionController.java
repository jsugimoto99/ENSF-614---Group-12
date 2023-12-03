package com.group12.CloudNineBackend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.group12.CloudNineBackend.boundary.PaymentTransactionService;
import com.group12.CloudNineBackend.domain.PaymentTransaction;
import com.group12.CloudNineBackend.domain.PaymentTransactionRequest;

/**
 * Controller class for handling HTTP requests related to payment transactions.
 *
 * @author Alton Wong
 */
@RestController
@RequestMapping("/payment")
@CrossOrigin
public class PaymentTransactionController {

    @Autowired
    private PaymentTransactionService paymentTransactionService;

    /**
     * Handles HTTP POST requests to process a new payment transaction.
     *
     * @param request The payment transaction request object. Sent as a request body.
     * @return A ResponseEntity indicating the result of the operation.
     */
    @PostMapping("/process")
    public ResponseEntity<String> processPaymentTransaction(@RequestBody PaymentTransactionRequest request) {
        try {
            PaymentTransaction transaction = paymentTransactionService.processPaymentTransaction(request);
            return new ResponseEntity<>("Payment transaction processed successfully with ID: " + transaction.getTransactionId(), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Error occurred during payment processing: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Additional methods can be added here for other operations related to payment transactions

}
