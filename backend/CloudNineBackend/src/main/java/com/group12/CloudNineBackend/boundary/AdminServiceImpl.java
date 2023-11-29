package com.group12.CloudNineBackend.boundary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	private AdminRepo adminRepo;
	
	@Override
	public boolean isAdmin(String username, String password) {
		return adminRepo.existsByUsernameAndPassword(username, password);
	}
}
