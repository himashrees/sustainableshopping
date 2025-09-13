//package com.example.RootandRise.service;
//
//import org.jsoup.Jsoup;
//import org.jsoup.nodes.Document;
//import org.jsoup.nodes.Element;
//import com.example.RootandRise.model.Product;
//import com.example.RootandRise.repository.ProductRepository;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.io.IOException;
//import java.util.ArrayList;
//import java.util.List;
//
//@Service
//public class Scraper {
//
//    @Autowired
//    private ProductRepository productRepository;
//
//    public void scrapeAndSave(String searchQuery) {
//        List<Product> products = new ArrayList<>();
//
//        // Scrape products from Flipkart
//        products.addAll(scrapeFlipkart(searchQuery));
//        // Scrape products from Myntra
//        products.addAll(scrapeMyntra(searchQuery));
//
//        // Scrape products from Snapdeal
//        products.addAll(scrapeSnapdeal(searchQuery));
//
//        // Scrape products from Ajio
//        products.addAll(scrapeAjio(searchQuery));
//
//        // Scrape products from BigBasket
//     
//        products.addAll(scrapeMeesho(searchQuery));
//
//        // Save products to the database
//        for (Product product : products) {
//            productRepository.save(product);
//        }
//    }
//
//    // Method to scrape Flipkart products
//    private List<Product> scrapeFlipkart(String searchQuery) {
//        List<Product> products = new ArrayList<>();
//        String baseUrl = "https://www.flipkart.com/search?q=" + searchQuery.replace(" ", "+");
//
//        try {
//            Document doc = Jsoup.connect(baseUrl)
//                    .userAgent("Mozilla/5.0")
//                    .timeout(10000)
//                    .get();
//
//            for (Element product : doc.select(".IIdQZO")) {
//                String title = product.select(".IRpwTa").text();
//                String link = product.select("a").attr("href");
//                link = "https://www.flipkart.com" + link;
//
//                Product p = new Product();
//                p.setName(title);
//                p.setPurchaseLink(link);
//                products.add(p);
//            }
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//
//        return products;
//    }
//
//    // Method to scrape Myntra products
//    private List<Product> scrapeMyntra(String searchQuery) {
//        List<Product> products = new ArrayList<>();
//        String baseUrl = "https://www.myntra.com/" + searchQuery.replace(" ", "-");
//
//        try {
//            Document doc = Jsoup.connect(baseUrl)
//                    .userAgent("Mozilla/5.0")
//                    .timeout(10000)
//                    .get();
//
//            for (Element product : doc.select(".product-productMetaInfo")) {
//                String title = product.select(".product-brand").text();
//                String link = product.select("a").attr("href");
//                link = "https://www.myntra.com" + link;
//
//                Product p = new Product();
//                p.setName(title);
//                p.setPurchaseLink(link);
//                products.add(p);
//            }
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//
//        return products;
//    }
//
//    // Method to scrape Snapdeal products
//    private List<Product> scrapeSnapdeal(String searchQuery) {
//        List<Product> products = new ArrayList<>();
//        String baseUrl = "https://www.snapdeal.com/search?keyword=" + searchQuery.replace(" ", "+");
//
//        try {
//            Document doc = Jsoup.connect(baseUrl)
//                    .userAgent("Mozilla/5.0")
//                    .timeout(10000)
//                    .get();
//
//            for (Element product : doc.select(".product-tuple-listing")) {
//                String title = product.select(".product-title").text();
//                String link = product.select("a").attr("href");
//
//                Product p = new Product();
//                p.setName(title);
//                p.setPurchaseLink(link);
//                products.add(p);
//            }
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//
//        return products;
//    }
//
//    // Method to scrape Ajio products
//    private List<Product> scrapeAjio(String searchQuery) {
//        List<Product> products = new ArrayList<>();
//        String baseUrl = "https://www.ajio.com/search/?text=" + searchQuery.replace(" ", "+");
//
//        try {
//            Document doc = Jsoup.connect(baseUrl)
//                    .userAgent("Mozilla/5.0")
//                    .timeout(10000)
//                    .get();
//
//            for (Element product : doc.select(".item")) {
//                String title = product.select(".brand").text() + " - " + product.select(".name").text();
//                String link = "https://www.ajio.com" + product.select("a").attr("href");
//
//                Product p = new Product();
//                p.setName(title);
//                p.setPurchaseLink(link);
//                products.add(p);
//            }
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//
//        return products;
//    }
//
//    // Method to scrape BigBasket products
// // Method to scrape BigBasket products
//    private List<Product> scrapeMeesho(String searchQuery) {
//        List<Product> products = new ArrayList<>();
//        // Use the correct search URL format
//        String baseUrl = "https://www.meesho.com/pc/search?q=" + searchQuery.replace(" ", "+");
//
//        try {
//            Document doc = Jsoup.connect(baseUrl)
//                    .userAgent("Mozilla/5.0")
//                    .timeout(10000)
//                    .get();
//
//            // Iterate through product listings (update selector based on BigBasket's page structure)
//            for (Element product : doc.select(".product")) {
//                String title = product.select(".name").text();
//                String link = product.select("a").attr("href");
//                link = "https://www.meesho.com" + link;
//
//                if (title != null && !title.isEmpty()) {
//                    Product p = new Product();
//                    p.setName(title);
//                    p.setPurchaseLink(link);
//                    products.add(p);
//                }
//            }
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//
//        return products;
//    }
//}