package com.group12.CloudNineBackend.boundary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.group12.CloudNineBackend.domain.RegisteredUser;
@Service
public class RegisteredUserServiceImpl implements RegisteredUserService{

	@Autowired
	private RegisteredUserRepo registeredUserRepo;
	
	@Override
	public boolean isValidUser(String username, String password) {
		 return registeredUserRepo.existsByUsernameAndPassword(username, password);
	}

	@Override
	public RegisteredUser addRegisteredUser(RegisteredUser registeredUser) {
		return registeredUserRepo.save(registeredUser);
		
	}

}
