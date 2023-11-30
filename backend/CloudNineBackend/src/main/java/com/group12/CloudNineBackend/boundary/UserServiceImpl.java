package com.group12.CloudNineBackend.boundary;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.group12.CloudNineBackend.domain.RegisteredUser;
import com.group12.CloudNineBackend.domain.User;

/**
 * @author Jeremy Sugimoto
 *
 */
@Service
public class UserServiceImpl implements UserService {

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
	public User addUser(User user) {
		return userRepo.save(user);
	}

	@Override
	public void registerUser(Long userId, RegisteredUser registeredUser) {
		Optional<User> optionalUser = userRepo.findById(userId);

		if (optionalUser.isPresent()) {
			User existingUser = optionalUser.get();

			// Check if the user is not already a RegisteredUser
			if (!(existingUser instanceof RegisteredUser)) {
				// Create a new RegisteredUser instance
				RegisteredUser updatedUser = registeredUser;
				
				 // Set the ID from the existing user to the new RegisteredUser
	            updatedUser.setId(existingUser.getId());
				// Copy relevant fields from User to RegisteredUser
				copyUserFieldsToRegisteredUser(existingUser, updatedUser);
				// Remove the old User
				userRepo.delete(existingUser);
				// Save the new RegisteredUser
				userRepo.save(updatedUser);

			} else {
				throw new RuntimeException("User not found with ID: " + userId);
			}
		}
	}

	private void copyUserFieldsToRegisteredUser(User user, RegisteredUser registeredUser) {
		;
		registeredUser.setfName(user.getfName());
		registeredUser.setlName(user.getlName());
		registeredUser.setEmail(user.getEmail());
		registeredUser.setUsername(user.getUsername());
		registeredUser.setPassword(user.getPassword());
		registeredUser.setStreet(user.getStreet());
		registeredUser.setCity(user.getCity());
		registeredUser.setState(user.getState());
		registeredUser.setZip(user.getZip());
		
	}

	@Override
	public String getUserRole(String username) {
		return userRepo.getUserRole(username);
	}

	@Override
	public Long getUserId(String username) {
		return userRepo.getUserId(username);
	}

	@Override
	public String getFName(String username) {
		return userRepo.getFName(username);
	}

	@Override
	public String getLName(String username) {
		return userRepo.getLName(username);
	}

	@Override
	public String getCity(String username) {
		return userRepo.getCity(username);
	}

	@Override
	public String getPassword(String username) {
		return userRepo.getPassword(username);
	}

	@Override
	public String getState(String username) {
		return userRepo.getState(username);
	}

	@Override
	public String getZip(String username) {
		return userRepo.getZip(username);
	}

//	@Override
//	public int getCvv(String username) {
//		return userRepo.getCvv(username);
//	}

	@Override
	public String getExpDate(String username) {
		return userRepo.getExpDate(username);
	}

	@Override
	public String getCardNum(String username) {
		return userRepo.getCardNumber(username);
	}

	@Override
	public String getEmail(String username) {
		return userRepo.getEmail(username);
	}

	@Override
	public String getStreet(String username) {
		return userRepo.getStreet(username);
	}

	@Override
	public String getUsername(Long userId) {
		return userRepo.getUsername(userId);
	}

}
