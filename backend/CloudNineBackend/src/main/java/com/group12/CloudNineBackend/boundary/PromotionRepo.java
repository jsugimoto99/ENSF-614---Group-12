package com.group12.CloudNineBackend.boundary;

import org.springframework.data.jpa.repository.JpaRepository;

import com.group12.CloudNineBackend.domain.Promotion;

public interface PromotionRepo extends JpaRepository<Promotion, Long>{

}
