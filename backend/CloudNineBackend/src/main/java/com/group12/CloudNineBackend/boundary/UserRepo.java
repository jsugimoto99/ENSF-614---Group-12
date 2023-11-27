package com.group12.CloudNineBackend.boundary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.group12.CloudNineBackend.domain.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
	boolean existsByUsernameAndPassword(String username, String password);
	boolean existsByEmail(String email);
	boolean existsByUsername(String username);
	 // Rename the method to better reflect its purpose
	@Query("SELECT u.username FROM User u WHERE u.Id = :id")
	String getUsername(@Param("id") Long id);
	
	@Query("SELECT u.role FROM User u WHERE u.username = :username")
	String getUserRole(@Param("username") String username);

	@Query("SELECT u.id FROM User u WHERE u.username = :username")
	Long getUserId(@Param("username") String username);

	@Query("SELECT u.city FROM User u WHERE u.username = :username")
	String getCity(@Param("username") String username);

	@Query("SELECT u.fName FROM User u WHERE u.username = :username")
	String getFName(@Param("username") String username);

	@Query("SELECT u.lName FROM User u WHERE u.username = :username")
	String getLName(@Param("username") String username);
	
	@Query("SELECT u.email FROM User u WHERE u.username = :username")
	String getEmail(@Param("username") String username);

	@Query("SELECT u.password FROM User u WHERE u.username = :username")
	String getPassword(@Param("username") String username);

	@Query("SELECT u.state FROM User u WHERE u.username = :username")
	String getState(@Param("username") String username);

	@Query("SELECT u.street FROM User u WHERE u.username = :username")
	String getStreet(@Param("username") String username);

	@Query("SELECT u.zip FROM User u WHERE u.username = :username")
	String getZip(@Param("username") String username);

	@Query("SELECT u.creditCardCvv FROM User u WHERE u.username = :username")
	int getCvv(@Param("username") String username);

	@Query("SELECT u.creditCardNumber FROM User u WHERE u.username = :username")
	String getCardNumber(@Param("username") String username);

	@Query("SELECT u.creditCardExp FROM User u WHERE u.username = :username")
	String getExpDate(@Param("username") String username);

    
}
