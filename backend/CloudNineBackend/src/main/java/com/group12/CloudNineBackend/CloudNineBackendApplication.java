package com.group12.CloudNineBackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

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

    /**
     * Configure global CORS settings for the application.
     *
     * @return CorsFilter bean to be registered with the application.
     */
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();

        // Allow requests from http://localhost:3000
        config.addAllowedOrigin("http://localhost:3000");

        // Allow common HTTP methods (GET, POST, PUT, DELETE, etc.)
        config.addAllowedMethod("*");

        // Allow common HTTP headers
        config.addAllowedHeader("*");

        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
