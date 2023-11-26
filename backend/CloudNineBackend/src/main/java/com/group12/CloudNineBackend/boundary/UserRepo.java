package com.group12.CloudNineBackend.boundary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.group12.CloudNineBackend.domain.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
	boolean existsByUsernameAndPassword(String username, String password);
	boolean existsByEmail(String email);
	boolean existsByUsername(String username);
	 // Rename the method to better reflect its purpose
	@Query("SELECT u.dtype FROM User u WHERE u.username = :username")
	String getUserRole(@Param("username") String username);
	
	@Query("SELECT u.dtype FROM User u WHERE u.id = :id")
	String getUserRole(@Param("id") Long id);

	@Query("SELECT u.id FROM User u WHERE u.username = :username")
	Long getUserId(@Param("username") String username);

	@Query("SELECT u.city FROM User u WHERE u.id = :id")
	String getCity(@Param("id") Long id);

	@Query("SELECT u.f_name FROM User u WHERE u.id = :id")
	String getFName(@Param("id") Long id);

	@Query("SELECT u.l_name FROM User u WHERE u.id = :id")
	String getLName(@Param("id") Long id);

	@Query("SELECT u.password FROM User u WHERE u.id = :id")
	String getPassword(@Param("id") Long id);

	@Query("SELECT u.state FROM User u WHERE u.id = :id")
	String getState(@Param("id") Long id);

	@Query("SELECT u.street FROM User u WHERE u.id = :id")
	String getStreet(@Param("id") Long id);

	@Query("SELECT u.zip FROM User u WHERE u.id = :id")
	String getZip(@Param("id") Long id);

	@Query("SELECT u.credit_cardcvv FROM User u WHERE u.id = :id")
	String getCvv(@Param("id") Long id);

	@Query("SELECT u.credit_card_number FROM User u WHERE u.id = :id")
	String getCardNumber(@Param("id") Long id);

	@Query("SELECT u.credit_cardexpiration_date FROM User u WHERE u.id = :id")
	String getExpDate(@Param("id") Long id);

    
}
