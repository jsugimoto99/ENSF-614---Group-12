package com.group12.CloudNineBackend.boundary;

import org.springframework.data.jpa.repository.JpaRepository;

import com.group12.CloudNineBackend.domain.Admin;

public interface AdminRepo extends JpaRepository<Admin, Integer> {
	boolean existsByUsernameAndPassword(String username, String password);

}
