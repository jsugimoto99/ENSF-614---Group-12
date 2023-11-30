
package com.group12.CloudNineBackend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.group12.CloudNineBackend.boundary.AdminService;
import com.group12.CloudNineBackend.domain.Admin;
import com.group12.CloudNineBackend.domain.User;
/**
 * 

 * @author Jeremy Sugimoto
 */

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
	@Autowired
	private AdminService adminService;
	
    @PostMapping("/login")
	public ResponseEntity<Map<String, String>> login(@RequestBody Admin admin) {
	    Map<String, String> response = new HashMap<>();
	    
	    String username = admin.getUsername();
	    String password = admin.getPassword();

	    // Validate credentials (consider using a more secure authentication mechanism)
	    if (adminService.isAdmin(username, password)) {
	        // Authentication successful
	        response.put("status", "success");
	        response.put("message", "Authentication successful");
	        return ResponseEntity.status(HttpStatus.OK).body(response);
	    } else {
	        // Authentication failed
	        response.put("status", "error");
	        response.put("message", "Invalid Login");
	        return ResponseEntity.status(HttpStatus.OK).body(response);
	    }
}
}