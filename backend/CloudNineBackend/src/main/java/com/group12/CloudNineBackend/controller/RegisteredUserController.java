
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
    public HttpStatus login(@RequestBody RegisteredUser registeredUser) {
        String username = registeredUser.getUsername();
        String password = registeredUser.getPassword();

        // Validate credentials (consider using a more secure authentication mechanism)
        if (registeredUserService.isValidUser(username, password)) {
            // Authentication successful
            return HttpStatus.OK;
        } else {
            // Authentication failed
            return HttpStatus.UNAUTHORIZED;
        }
    }
	
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisteredUser registeredUser) {
        if (registeredUserService.isEmailAlreadyRegistered(registeredUser.getEmail())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email is already registered");
        }

        if (registeredUserService.isUsernameAlreadyRegistered(registeredUser.getUsername())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username is already taken");
        }

        registeredUserService.addRegisteredUser(registeredUser);
        	return ResponseEntity.status(HttpStatus.CREATED).body("User has been Registered");
    }

	
	
}



    
