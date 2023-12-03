package com.group12.CloudNineBackend.boundary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.group12.CloudNineBackend.domain.RegisteredUser;

/**
 * @author Jeremy Sugimoto
 *
 */
@Repository
public interface UserRepo extends JpaRepository<RegisteredUser, Long> {
	boolean existsByUsernameAndPassword(String username, String password);
	boolean existsByEmail(String email);
	boolean existsByUsername(String username);
	
	 // Rename the method to better reflect its purpose
	@Query("SELECT u.username FROM RegisteredUser u WHERE u.Id = :id")
	String getUsername(@Param("id") Long id);

	@Query("SELECT u.id FROM RegisteredUser u WHERE u.username = :username")
	Long getUserId(@Param("username") String username);

	@Query("SELECT u.city FROM RegisteredUser u WHERE u.username = :username")
	String getCity(@Param("username") String username);

	@Query("SELECT u.fName FROM RegisteredUser u WHERE u.username = :username")
	String getFName(@Param("username") String username);

	@Query("SELECT u.lName FROM RegisteredUser u WHERE u.username = :username")
	String getLName(@Param("username") String username);
	
	@Query("SELECT u.email FROM RegisteredUser u WHERE u.username = :username")
	String getEmail(@Param("username") String username);

	@Query("SELECT u.password FROM RegisteredUser u WHERE u.username = :username")
	String getPassword(@Param("username") String username);

	@Query("SELECT u.state FROM RegisteredUser u WHERE u.username = :username")
	String getState(@Param("username") String username);

	@Query("SELECT u.street FROM RegisteredUser u WHERE u.username = :username")
	String getStreet(@Param("username") String username);

	@Query("SELECT u.zip FROM RegisteredUser u WHERE u.username = :username")
	String getZip(@Param("username") String username);

    
}
