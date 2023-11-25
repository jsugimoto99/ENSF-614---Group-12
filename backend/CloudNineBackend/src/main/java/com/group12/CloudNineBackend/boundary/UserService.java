package com.group12.CloudNineBackend.boundary;

import com.group12.CloudNineBackend.domain.User;

public interface UserService {
	boolean isValidUser(String username, String password);

	public User addUser(User user);

	boolean isEmailAlreadyRegistered(String email);

	boolean isUsernameAlreadyRegistered(String username);

	String getUserRole(String username);
}

