package com.group12.CloudNineBackend.boundary;

import org.springframework.data.repository.query.Param;

import com.group12.CloudNineBackend.domain.RegisteredUser;
import com.group12.CloudNineBackend.domain.User;

public interface UserService {
	boolean isValidUser(String username, String password);

	public User addUser(User user);

	boolean isEmailAlreadyRegistered(String email);

	boolean isUsernameAlreadyRegistered(String username);

	String getUserRole(String username);
	
	String getUserInformation(Long id);
	
	public RegisteredUser registerUser (User user);

	String getUserRole(Long id);
	
	Long getUserId(String username);
	
	String getFName(Long id);
	
	String getLName(Long id);
	
	String getCity(Long id);
	
	String getPassword (Long id);
	
	String getState (Long id);
	
	String getZip (Long id);
	
	String getCvv (Long id);
	
	String getExpDate (Long id);
	
	
	
	
	
}

