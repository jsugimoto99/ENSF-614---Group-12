package com.group12.CloudNineBackend.boundary;

import com.group12.CloudNineBackend.domain.RegisteredUser;
import com.group12.CloudNineBackend.domain.User;

/**
 * @author Jeremy Sugimoto
 *
 */
public interface UserService {
	boolean isValidUser(String username, String password);

	public User addUser(User user);
	
	boolean isEmailAlreadyRegistered(String email);

	boolean isUsernameAlreadyRegistered(String username);

	String getUserRole(String username);
	
	public void registerUser(Long userId, RegisteredUser registeredUser);
	
	Long getUserId(String username);
	
	String getFName(String username);
	
	String getLName(String username);
	
	String getCity(String username);
	
	String getEmail(String username);
	
	String getPassword(String username);
	
	String getState (String username);
	
	String getZip(String username);
	
//	int getCvv(String username);
	
	String getExpDate(String username);
	
	String getCardNum(String username);

	String getStreet(String username);

	String getUsername(Long userId);
	
	
	
	
	
}

