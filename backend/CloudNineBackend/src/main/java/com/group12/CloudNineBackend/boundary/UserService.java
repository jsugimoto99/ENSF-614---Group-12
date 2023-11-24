package com.group12.CloudNineBackend.boundary;

import com.group12.CloudNineBackend.domain.RegisteredUser;

public interface UserService {
	boolean isValidUser(String username, String password);

	public RegisteredUser addRegisteredUser(RegisteredUser registeredUser);

	boolean isEmailAlreadyRegistered(String email);

	boolean isUsernameAlreadyRegistered(String username);

	String getUserRole(String username);
}

