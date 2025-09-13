package com.example.RootandRise.service;



import com.example.RootandRise.*;
import com.example.RootandRise.model.Product;
import com.example.RootandRise.model.UserPreferences;
import com.example.RootandRise.repository.ProductRepository;
import com.example.RootandRise.repository.UserPreferencesRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RootAndRiseService {

    private final UserPreferencesRepository preferencesRepository;
    private final ProductRepository productRepository;

    public RootAndRiseService(UserPreferencesRepository preferencesRepository, ProductRepository productRepository) {
        this.preferencesRepository = preferencesRepository;
        this.productRepository = productRepository;
    }

    public UserPreferences savePreferences(UserPreferences preferences) {
        return preferencesRepository.save(preferences);
    }

    public List<Product> getRecommendations(String category) {
        return productRepository.findAll().stream()
                .filter(product -> product.getCategory().equalsIgnoreCase(category))
                .toList();
    }
}

