package com.group12.CloudNineBackend.boundary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.group12.CloudNineBackend.domain.RegisteredUser;
import com.group12.CloudNineBackend.domain.User;
@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepo userRepo;
	
	@Override
	public boolean isValidUser(String username, String password) {
		 return userRepo.existsByUsernameAndPassword(username, password);
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

	@Override
	public User addUser(User user) {
		return userRepo.save(user);
	}

}
