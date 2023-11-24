package com.group12.CloudNineBackend.boundary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.group12.CloudNineBackend.domain.RegisteredUser;

@Repository
public interface RegisteredUserRepo extends JpaRepository<RegisteredUser, Integer> {
	boolean existsByUsernameAndPassword(String username, String password);
	boolean existsByEmail(String email);
	boolean existsByUsername(String username);
}
