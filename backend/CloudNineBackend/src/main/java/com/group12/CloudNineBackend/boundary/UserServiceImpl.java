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
	public String getUserRole(Long id) {
	    return userRepo.getUserRole(id);
	}

	@Override
	public User addUser(User user) {
		return userRepo.save(user);
	}

	@Override
	public RegisteredUser registerUser(User user) {
		RegisteredUser registeredUser = (RegisteredUser) user;	
		userRepo.delete(user);
		return userRepo.save(registeredUser);
	}

	@Override
	public String getUserInformation(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getUserRole(String username) {
		return getUserRole(username);
	}

	@Override
	public Long getUserId(String username) {
		return getUserId(username);
	}

	@Override
	public String getFName(Long id) {
		return getFName(id);
	}

	@Override
	public String getLName(Long id) {
		return getLName(id);
	}

	@Override
	public String getCity(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getPassword(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getState(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getZip(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getCvv(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getExpDate(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
