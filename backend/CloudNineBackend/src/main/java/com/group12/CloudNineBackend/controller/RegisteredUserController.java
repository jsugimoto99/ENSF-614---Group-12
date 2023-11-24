
package com.group12.CloudNineBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.group12.CloudNineBackend.boundary.RegisteredUserService;
import com.group12.CloudNineBackend.domain.RegisteredUser;
/**
 * 

 * @author Jeremy Sugimoto
 */

@RestController
@RequestMapping("/registeredUser")
@CrossOrigin
public class RegisteredUserController {
	@Autowired
	private RegisteredUserService registeredUserService;
	
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody RegisteredUser registeredUser) {
        String username = registeredUser.getUsername();
        String password = registeredUser.getPassword();

        // Validate credentials (consider using a more secure authentication mechanism)
        if (registeredUserService.isValidUser(username, password)) {
            // Authentication successful
            return ResponseEntity.ok("Login successful!");
        } else {
            // Authentication failed
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
	
	@PostMapping("/register")
    public String register(@RequestBody RegisteredUser registeredUser) {
        registeredUserService.addRegisteredUser(registeredUser);
        return "User has been Registered";
    }
	
	
}



    
