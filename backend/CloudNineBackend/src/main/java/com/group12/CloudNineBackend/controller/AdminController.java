
package com.group12.CloudNineBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.group12.CloudNineBackend.boundary.AdminService;
import com.group12.CloudNineBackend.domain.Admin;
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
    public HttpStatus login(@RequestBody Admin admin) {
        String username = admin.getUsername();
        String password = admin.getPassword();

        // Validate credentials (consider using a more secure authentication mechanism)
        if (adminService.isAdmin(username, password)) {
            // Authentication successful
            return HttpStatus.OK;
        } else {
            // Authentication failed
            return HttpStatus.UNAUTHORIZED;
        }
    }
}