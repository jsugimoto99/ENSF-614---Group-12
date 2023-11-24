package com.group12.CloudNineBackend.boundary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.group12.CloudNineBackend.domain.RegisteredUser;
@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepo userRepo;
	
	@Override
	public boolean isValidUser(String username, String password) {
		 return userRepo.existsByUsernameAndPassword(username, password);
	}

	@Override
	public RegisteredUser addRegisteredUser(RegisteredUser registeredUser) {
		return userRepo.save(registeredUser);
		
	}

	@Override
	public boolean isEmailAlreadyRegistered(String email) {
		return userRepo.existsByEmail(email);
	}

	@Override
	public boolean isUsernameAlreadyRegistered(String username) {
		return userRepo.existsByUsername(username);
	}

	@Override
	public String getUserRole(String username) {
	    return userRepo.getUserRoleByUsername(username);
	}

}
