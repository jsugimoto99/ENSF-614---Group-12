
package com.group12.CloudNineBackend.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.group12.CloudNineBackend.boundary.UserService;
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
	public ResponseEntity<Map<String, String>> login(@RequestBody User user) {
	    Map<String, String> response = new HashMap<>();
	    
	    String username = user.getUsername();
	    String password = user.getPassword();

	    // Validate credentials (consider using a more secure authentication mechanism)
	    if (userService.isValidUser(username, password)) {
	        // Authentication successful
	        String userRole = userService.getUserRole(username); // Adjust this based on your logic
	        response.put("status", "success");
	        response.put("message", "Authentication successful");
	        response.put("userRole", userRole);
	        return ResponseEntity.status(HttpStatus.OK).body(response);
	    } else {
	        // Authentication failed
	        response.put("status", "error");
	        response.put("message", "Invalid Login");
	        return ResponseEntity.status(HttpStatus.OK).body(response);
	    }
	}
	
    @PostMapping("/signUp")
    public ResponseEntity<String> signUp(@RequestBody User user) {
        if (userService.isEmailAlreadyRegistered(user.getEmail())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email is already registered");
        }

        if (userService.isUsernameAlreadyRegistered(user.getUsername())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username is already taken");
        }

        userService.addUser(user);
        	return ResponseEntity.status(HttpStatus.CREATED).body("User has been signed up");
    }

    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> register(@RequestBody User user) {
	    Map<String, String> response = new HashMap<>();
	    
	    Long id = user.getId();
	    
	    userService.registerUser(user);
	    String userRole = userService.getUserRole(id);
	    
	    	response.put("status", "success");
        	response.put("message", "User is now registered");
        	response.put("userRole", userRole);
        return ResponseEntity.status(HttpStatus.OK).body(response);
		
	
    }
}



    
