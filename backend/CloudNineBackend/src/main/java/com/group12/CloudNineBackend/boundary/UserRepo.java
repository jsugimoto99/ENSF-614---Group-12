package com.group12.CloudNineBackend.boundary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.group12.CloudNineBackend.domain.RegisteredUser;

@Repository
public interface UserRepo extends JpaRepository<RegisteredUser, Integer> {
	boolean existsByUsernameAndPassword(String username, String password);
	boolean existsByEmail(String email);
	boolean existsByUsername(String username);
	 // Rename the method to better reflect its purpose
    @Query("SELECT u.role FROM RegisteredUser u WHERE u.username = :username")
    String getUserRoleByUsername(@Param("username") String username);
}
