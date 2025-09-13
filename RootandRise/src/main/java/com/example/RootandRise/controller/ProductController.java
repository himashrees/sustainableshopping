package com.example.RootandRise.controller;

import com.example.RootandRise.model.Product;
import com.example.RootandRise.service.ScraperService;
import com.example.RootandRise.repository.ProductRepository; // assuming you have a repository for Product

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RequestMapping("/api/products")
public class ProductController {

    private final ScraperService scraperService;
    private final ProductRepository productRepository; // Assuming you have this repository

    public ProductController(ScraperService scraperService, ProductRepository productRepository) {
        this.scraperService = scraperService;
        this.productRepository = productRepository;
    }

    @GetMapping("/scrape")
    public List<Product> scrapeProducts(@RequestParam String query) {
        List<Product> products = new ArrayList<>();

//    products.addAll(scraperService.scrapeEbay(query));
////        
//products.addAll(scraperService.scrapeWalmart(query));
//
//        // Scraping from Meesho
//     products.addAll(scraperService.scrapeMeesho(query));
////
////        // Scraping from Ajios
//	/* products.addAll(scraperService.scrapeAjio(query)); */
////
////        // Scraping from Myntra
//       products.addAll(scraperService.scrapeMyntra(query));
//
//        // Save the products to the database if needed
        productRepository.saveAll(products);

        return products;
    }
   @GetMapping("/all")
   public List<Product> getAllProducts() {
      return productRepository.findAll(); // Fetch all products saved in database
   }
}

