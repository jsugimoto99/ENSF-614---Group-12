package com.group12.CloudNineBackend.boundary;

import org.springframework.stereotype.Service;

import com.group12.CloudNineBackend.domain.Admin;

@Service
public class AdminServiceImpl implements AdminService {
	
	private Admin admin;
	
	@Override
	public boolean isAdmin(String username, String password) {
	    return admin != null && username.equals("admin") && password.equals("admin");
	}
}
