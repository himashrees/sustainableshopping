//package com.example.RootandRise.controller;
//
//
//
//import com.example.RootandRise.model.Product;
//import com.example.RootandRise.model.UserPreferences;
//import com.example.RootandRise.service.ExternalApiService;
//import com.example.RootandRise.service.RootAndRiseService;
//import com.example.RootandRise.service.ScraperService;
//
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@RestController
//@CrossOrigin("*")
//@RequestMapping("/api")
//public class RootAndRiseController {
//
//    private final RootAndRiseService rootAndRiseService;
//    private final ExternalApiService externalApiService;
//    private final ScraperService scraperService;
//    
//
//    // Constructor-based dependency injection for both services
//    public RootAndRiseController(RootAndRiseService rootAndRiseService, ExternalApiService externalApiService,ScraperService scraperService) {
//        this.rootAndRiseService = rootAndRiseService;
//        this.externalApiService = externalApiService;
//        this.scraperService= scraperService;
//    }
//
//    @PostMapping("/preferences")
//    public ResponseEntity<UserPreferences> savePreferences(@RequestBody UserPreferences preferences) {
//        return ResponseEntity.ok(rootAndRiseService.savePreferences(preferences));
//    }
//
//    @GetMapping("/external-products")
//    public ResponseEntity<List<Product>> getExternalProducts(@RequestParam String searchQuery) {
//        // Call fetchProducts on the injected externalApiService instance
//        List<Product> products = externalApiService.fetchProducts(searchQuery);
//        return ResponseEntity.ok(products);
//    }
//
//    @GetMapping("/recommendations")
//    public ResponseEntity<List<Product>> getRecommendations(@RequestParam String category) {
//        return ResponseEntity.ok(rootAndRiseService.getRecommendations(category));
//    }
//}
////    @GetMapping("/products")
////    public List<Product> getEcoFriendlyProducts(@RequestParam String searchQuery) {
////        List<Product> products = new ArrayList<>();
////        
////        // Fetch from Etsy API
////        products.addAll(scraperService.fetchFromEtsy(searchQuery));
////        
////        // Example: Scraping from a public eco-friendly store
////        products.addAll(scraperService.scrapeFromWebsite(
////                "https://exampleeco.com/search?q=",
////                searchQuery,
////                ".product-card", // Product selector
////                ".product-title", // Title selector
////                ".product-image img", // Image selector
////                ".product-link" // Link selector
////        ));
////        
////        return products;
////    }
////
////}
