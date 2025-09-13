package com.example.RootandRise.service;


import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.example.RootandRise.model.Product;

import java.util.List;

public class MyService {

    public List<Product> fetchProducts() {
        String url = "http://localhost:8080/api/products/scrape?query=ecofriendly";  // Your actual URL

        // Using RestTemplate to make an HTTP request
        RestTemplate restTemplate = new RestTemplate();
        
        // Deserialize JSON array into a list of Product objects
        ResponseEntity<List<Product>> response = restTemplate.exchange(url, HttpMethod.GET, null, 
                new ParameterizedTypeReference<List<Product>>() {});
        
        // Check if we received any data
        if (response.getStatusCode().is2xxSuccessful()) {
            return response.getBody();  // Return the list of products
        } else {
            // Handle error if necessary
            return List.of();  // Return an empty list if something went wrong
        }
    }
}
