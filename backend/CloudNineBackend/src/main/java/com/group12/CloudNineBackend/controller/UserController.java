
package com.group12.CloudNineBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.group12.CloudNineBackend.boundary.UserService;
import com.group12.CloudNineBackend.domain.LoginResponse;
import com.group12.CloudNineBackend.domain.RegisteredUser;
import com.group12.CloudNineBackend.domain.User;
/**
 * 

 * @author Jeremy Sugimoto
 */

@RestController
@RequestMapping("/User")
@CrossOrigin
public class UserController {
	@Autowired
	private UserService userService;
	
	@PostMapping("/login")
	public ResponseEntity<LoginResponse> login(@RequestBody User user) {
	    String username = user.getUsername();
	    String password = user.getPassword();

	    // Validate credentials (consider using a more secure authentication mechanism)
	    if (userService.isValidUser(username, password)) {
	        // Authentication successful
	        String userRole = userService.getUserRole(username); // Adjust this based on your logic
	        return ResponseEntity.status(HttpStatus.OK).body(new LoginResponse("OK", userRole));
	    } else {
	        // Authentication failed
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new LoginResponse("Not Found", null));
	    }
	}

	
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisteredUser registeredUser) {
        if (userService.isEmailAlreadyRegistered(registeredUser.getEmail())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email is already registered");
        }

        if (userService.isUsernameAlreadyRegistered(registeredUser.getUsername())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username is already taken");
        }

        userService.addRegisteredUser(registeredUser);
        	return ResponseEntity.status(HttpStatus.CREATED).body("User has been Registered");
    }

	
	
}



    
