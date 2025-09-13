//package com.example.RootandRise.service;
//
//import org.jsoup.Jsoup;
//import org.jsoup.nodes.Document;
//import org.jsoup.nodes.Element;
//import org.springframework.stereotype.Service;
//import com.example.RootandRise.model.Product;
//
//import java.io.IOException;
//import java.util.ArrayList;
//import java.util.List;
//
//@Service
//public class ExternalApiService {
//
//    public List<Product> fetchProducts(String searchQuery) {
//        List<Product> products = new ArrayList<>();
//        try {
//            // Scrape Amazon
//            scrapeAmazon(searchQuery, products);
//            // Scrape EcoRoots
//            scrapeEcoRoots(searchQuery, products);
//            // Add more scrapers as needed
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        return products;
//    }
//
//    private void scrapeAmazon(String searchQuery, List<Product> products) throws IOException {
//        String url = "https://www.amazon.in/s?k=" + searchQuery.replace(" ", "+");
//        Document doc = Jsoup.connect(url)
//                .userAgent("Mozilla/5.0")
//                .timeout(10000)
//                .get();
//
//        for (Element product : doc.select(".s-title-instructions-style")) {
//            String title = product.text();
//            String link = "https://www.amazon.in" + product.attr("href");
//
//            Product p = new Product();
//            p.setName(title);
//            p.setPurchaseLink(link);
//            products.add(p);
//        }
//    }
//
//    private void scrapeEcoRoots(String searchQuery, List<Product> products) throws IOException {
//        String url = "https://ecoroots.us/search?q=" + searchQuery.replace(" ", "+");
//        Document doc = Jsoup.connect(url)
//                .userAgent("Mozilla/5.0")
//                .timeout(10000)
//                .get();
//
//        for (Element product : doc.select(".product-title a")) {
//            String title = product.text();
//            String link = "https://ecoroots.us" + product.attr("href");
//
//            Product p = new Product();
//            p.setName(title);
//            p.setPurchaseLink(link);
//            products.add(p);
//        }
//    }
//}
