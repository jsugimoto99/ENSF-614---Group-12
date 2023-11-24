package com.group12.CloudNineBackend.boundary;

import com.group12.CloudNineBackend.domain.RegisteredUser;

public interface RegisteredUserService {
	boolean isValidUser(String username, String password);

	public RegisteredUser addRegisteredUser(RegisteredUser registeredUser);
}

