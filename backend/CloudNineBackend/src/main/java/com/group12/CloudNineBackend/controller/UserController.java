
package com.group12.CloudNineBackend.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.group12.CloudNineBackend.boundary.UserRepo;
import com.group12.CloudNineBackend.domain.RegisteredUser;
/**
 * 

 * @author Jeremy Sugimoto
 */

@RestController
@RequestMapping("/User")
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserRepo userRepo;
	
	@PostMapping("/login")
	public ResponseEntity<Map<String, Object>> login(@RequestBody RegisteredUser registeredUser) {
	    Map<String, Object> response = new HashMap<>();
	    
	    String username = registeredUser.getUsername();
	    String password = registeredUser.getPassword();

	    // Validate credentials (consider using a more secure authentication mechanism)
	    if (userRepo.existsByUsernameAndPassword(username, password)) {
	        // Authentication successful
	        response.put("status", "success");
	        response.put("message", "Authentication successful");
	        Long id = userRepo.getUserId(username);
	        response.put("id", id);
	        response.put("username", username);
	        response.put("password", password);
	        String email =userRepo.getEmail(username);
			response.put("email", email);
	        String street = userRepo.getStreet(username);
			response.put("street", street);
	        String city = userRepo.getCity(username);
			response.put("city", city);
	        String state = userRepo.getState(username);
			response.put("state", state);
	        String zip = userRepo.getZip(username);
			response.put("zip", zip);
	        
	        return ResponseEntity.status(HttpStatus.OK).body(response);
	    } else {
	        // Authentication failed
	        response.put("status", "error");
	        response.put("message", "Invalid Login");
	        return ResponseEntity.status(HttpStatus.OK).body(response);
	    }
	}
	
    @PostMapping("/signUp")
    public ResponseEntity<Map<String, Object>> signUp(@RequestBody RegisteredUser registereUser) {
        Map<String, Object> response = new HashMap<>();

        // Validate user input (e.g., check if email and username are not empty)

        if (userRepo.existsByEmail(registereUser.getEmail())) {
            response.put("status", "error");
            response.put("message", "Email already exists");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        if (userRepo.existsByUsername(registereUser.getUsername())) {
            response.put("status", "error");
            response.put("message", "Username already exists");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        userRepo.save(registereUser);

        response.put("status", "success");
        response.put("message", "Sign up successful");
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

}



    
