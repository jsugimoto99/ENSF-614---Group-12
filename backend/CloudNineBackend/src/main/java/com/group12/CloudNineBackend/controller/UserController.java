
package com.group12.CloudNineBackend.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.group12.CloudNineBackend.boundary.UserRepo;
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
	
	@Autowired
	private UserRepo userRepo;
	
	@PostMapping("/login")
	public ResponseEntity<Map<String, Object>> login(@RequestBody User user) {
	    Map<String, Object> response = new HashMap<>();
	    
	    String username = user.getUsername();
	    String password = user.getPassword();

	    // Validate credentials (consider using a more secure authentication mechanism)
	    if (userRepo.existsByUsernameAndPassword(username, password)) {
	        // Authentication successful
	        response.put("status", "success");
	        response.put("message", "Authentication successful");
	        Long id = userRepo.getUserId(username);
	        response.put("id", id);
	        String userRole = userRepo.getUserRole(username); // Adjust this based on your logic
	        
	        response.put("role", userRole);
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
    public ResponseEntity<Map<String, Object>> signUp(@RequestBody User user) {
        Map<String, Object> response = new HashMap<>();

        // Validate user input (e.g., check if email and username are not empty)

        if (userRepo.existsByEmail(user.getEmail())) {
            response.put("status", "error");
            response.put("message", "Email already exists");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        if (userRepo.existsByUsername(user.getUsername())) {
            response.put("status", "error");
            response.put("message", "Username already exists");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        userRepo.save(user);

        response.put("status", "success");
        response.put("message", "Sign up successful");
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @PostMapping("/register/{userId}")
    public ResponseEntity<Map<String, Object>> register(@PathVariable Long userId, @RequestBody RegisteredUser user) {
        Map<String, Object> response = new HashMap<>();
        try {
            userService.registerUser(userId, user);

            // Fetch additional information about the registered user
            String username = userService.getUsername(userId);
            String userRole = userService.getUserRole(username);
//            int userCvv = userService.getCvv(username);
            String userCardNum = userService.getCardNum(username);
            String userCardExp = userService.getExpDate(username);

            // Prepare the response
            response.put("status", "success");
            response.put("message", "User is now registered");
            response.put("userRole", userRole);
            response.put("cardNumber", userCardNum);
            response.put("expDate", userCardExp);
//            response.put("cvv", String.valueOf(userCvv));

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            // Log the exception (consider using a proper logging framework)
            e.printStackTrace();

            // Provide a meaningful error response to the client
            response.put("status", "error");
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}



    
