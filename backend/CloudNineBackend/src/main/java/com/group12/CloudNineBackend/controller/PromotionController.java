package com.group12.CloudNineBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.group12.CloudNineBackend.boundary.PromotionRepo;
import com.group12.CloudNineBackend.domain.Promotion;

import java.util.List;

@RestController
@RequestMapping("/promotions")
@CrossOrigin
public class PromotionController {

    @Autowired
    private PromotionRepo promoRepo;

    @GetMapping
    public List<Promotion> getAllPromotions() {
        return promoRepo.findAll();
    }

    @GetMapping("/{id}")
    public Promotion getPromotionById(@PathVariable Long id) {
        return promoRepo.findById(id).orElse(null);
    }

    @PostMapping("/add")
    public ResponseEntity<String> createPromotion(@RequestBody Promotion promotion) {
        Promotion savedPromotion = promoRepo.save(promotion);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body("Promotion created with ID: " + savedPromotion.getPromoId());
    }

    @PutMapping("/{id}")
    public Promotion updatePromotion(@PathVariable Long id, @RequestBody Promotion promotionDetails) {
        Promotion promotion = promoRepo.findById(id).orElse(null);
        if (promotion != null) {
            promotion.setDescription(promotionDetails.getDescription());
            return promoRepo.save(promotion);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deletePromotion(@PathVariable Long id) {
        promoRepo.deleteById(id);
    }
}
