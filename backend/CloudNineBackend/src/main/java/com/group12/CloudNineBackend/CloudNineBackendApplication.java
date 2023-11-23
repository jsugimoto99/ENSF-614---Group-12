package com.group12.CloudNineBackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main class for starting the CloudNineBackend application.
 * This class is annotated with @SpringBootApplication, indicating that
 * it is the entry point for the Spring Boot application.
 */
@SpringBootApplication
public class CloudNineBackendApplication {

    /**
     * Main method to start the Spring Boot application.
     *
     * @param args Command-line arguments passed to the application.
     */
    public static void main(String[] args) {
        SpringApplication.run(CloudNineBackendApplication.class, args);
    }
}
