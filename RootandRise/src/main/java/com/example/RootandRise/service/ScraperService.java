//package com.example.RootandRise.service;
//
//import org.jsoup.Jsoup;
//import org.jsoup.nodes.Document;
//import org.jsoup.nodes.Element;
//import org.jsoup.select.Elements;
//import org.springframework.stereotype.Service;
//import com.example.RootandRise.model.Product;
//import com.example.RootandRise.repository.ProductRepository;
//
//import java.io.IOException;
//import java.util.ArrayList;
//import java.util.List;
//
//@Service
//public class ScraperService {
//
//    private final ProductRepository productRepository;
//
//    public ScraperService(ProductRepository productRepository) {
//        this.productRepository = productRepository;
//    }
//    public List<Product> scrapeWalmart(String searchQuery) {
//        return scrapeGeneric("https://www.walmart.com/search/?query=", searchQuery, ".search-result-gridview-item", 
//                ".product-title-link", "img", ".price-main .price-characteristic", "https://www.walmart.com");
//    }
//    public List<Product> scrapeDMart(String searchQuery) {
//        return scrapeGeneric("https://www.dmart.in/search/?text=", searchQuery, ".product-container", 
//                ".product-title", "img.product-image", ".product-price", "https://www.dmart.in");
//    }
//    
//    public List<Product> scrapeAmazon(String searchQuery) {
//        return scrapeGeneric("https://www.amazon.in/s?k=", searchQuery, ".s-main-slot .s-result-item", ".a-link-normal.s-link-style", ".s-image", ".a-price .a-offscreen", "https://www.amazon.in");
//    }
//
//    
//    public List<Product> scrapeSnapdeal(String searchQuery) {
//        return scrapeGeneric("https://www.snapdeal.com/search?keyword=", searchQuery, ".product-tuple-listing", ".product-title", "img.product-image", ".product-price", "https://www.snapdeal.com");
//    }
//
//    public List<Product> scrapeMeesho(String searchQuery) {
//        return scrapeGeneric("https://www.flipkart.com/search?q=", searchQuery, ".product-card", ".product-card-title", "img", ".product-price", "https://www.flipkart.com");
//    }
//
//    
//    public List<Product> scrapeAjio(String searchQuery) {
//        return scrapeGeneric("https://www.ajio.com/search?text=", searchQuery, ".item", ".nameCls", "img", ".price", "https://www.ajio.com");
//    }
//
//    public List<Product> scrapeMyntra(String searchQuery) {
//        return scrapeGeneric("https://www.myntra.com/", searchQuery, ".product-base", ".product-brand", "img.img-responsive", ".product-discountedPrice", "https://www.myntra.com");
//    }
//
//    private List<Product> scrapeGeneric(String baseUrl, String searchQuery, String productSelector, String titleSelector, String imageSelector, String priceSelector, String baseLink) {
//        List<Product> products = new ArrayList<>();
//        String url = baseUrl + searchQuery.replace(" ", "+");
//
//        try {
//            Document doc = Jsoup.connect(url)
//                    .userAgent("Mozilla/5.0")
//                    .timeout(10000)
//                    .get();
//
//            Elements productElements = doc.select(productSelector);
//            for (Element productElement : productElements) {
//                Element titleElement = productElement.selectFirst(titleSelector);
//                Element imageElement = productElement.selectFirst(imageSelector);
//                Element priceElement = productElement.selectFirst(priceSelector);
//
//                if (titleElement != null && imageElement != null && priceElement != null) {
//                    String title = titleElement.text();
//                    String imageUrl = imageElement.attr("src");
//                    String price = priceElement.text();
//                    String link = baseLink + titleElement.parent().attr("href");
//
//                    Product product = new Product();
//                    product.setName(title);
//                    product.setImage(imageUrl);
//                    product.setPrice(price);
//                    product.setPurchaseLink(link);
//
//                    productRepository.save(product);
//                    products.add(product);
//                }
//            }
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//
//        return products;
//    }
//}
//
//
//
//
//
//
//
//



package com.example.RootandRise.service;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;
import com.example.RootandRise.model.Product;
import com.example.RootandRise.repository.ProductRepository;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ScraperService {

    private final ProductRepository productRepository;

    public ScraperService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> scrapeWalmart(String searchQuery) {
        return scrapeGeneric("https://www.walmart.com/search/?query=", searchQuery, ".search-result-gridview-item",
                ".product-title-link", "img", ".price-main .price-characteristic", ".product-category", "https://www.walmart.com");
    }

    public List<Product> scrapeDMart(String searchQuery) {
        return scrapeGeneric("https://www.dmart.in/search/?text=", searchQuery, ".product-container",
                ".product-title", "img.product-image", ".product-price", ".product-category", "https://www.dmart.in");
    }

//    public List<Product> scrapeAmazon(String searchQuery) {
//        return scrapeGeneric("https://www.amazon.in/s?k=", searchQuery, ".s-main-slot .s-result-item",
//                ".a-link-normal.s-link-style", ".s-image", ".a-price .a-offscreen", ".category-class", "https://www.amazon.in");
//    }

//    public List<Product> scrapeSnapdeal(String searchQuery) {
//        return scrapeGeneric("https://www.snapdeal.com/search?keyword=", searchQuery, ".product-tuple-listing",
//                ".product-title", "img.product-image", ".product-price", ".product-category", "https://www.snapdeal.com");
//    }

//    public List<Product> scrapeMeesho(String searchQuery) {
//        return scrapeGeneric("https://www.flipkart.com/search?q=", searchQuery, ".product-card",
//                ".product-card-title", "img", ".product-price", ".product-category", "https://www.flipkart.com");
//    }
//
//    public List<Product> scrapeAjio(String searchQuery) {
//        return scrapeGeneric("https://www.ajio.com/search?text=", searchQuery, ".item",
//                ".nameCls", "img", ".price", ".product-category", "https://www.ajio.com");
//    }
//
//    public List<Product> scrapeMyntra(String searchQuery) {
//        return scrapeGeneric("https://www.myntra.com/", searchQuery, ".product-base",
//                ".product-brand", "img.img-responsive", ".product-discountedPrice", ".category", "https://www.myntra.com");
//    }

    private List<Product> scrapeGeneric(String baseUrl, String searchQuery, String productSelector,
                                        String titleSelector, String imageSelector, String priceSelector,
                                        String categorySelector, String baseLink) {
        List<Product> products = new ArrayList<>();
        String url = baseUrl + searchQuery.replace(" ", "+");

        try {
            Document doc = Jsoup.connect(url)
                    .userAgent("Mozilla/5.0")
                    .timeout(10000)
                    .get();

            Elements productElements = doc.select(productSelector);
            for (Element productElement : productElements) {
                Element titleElement = productElement.selectFirst(titleSelector);
                Element imageElement = productElement.selectFirst(imageSelector);
                Element priceElement = productElement.selectFirst(priceSelector);
                Element categoryElement = productElement.selectFirst(categorySelector);

                if (titleElement != null && imageElement != null && priceElement != null) {
                    String title = titleElement.text();
                    String imageUrl = imageElement.attr("src");
                    String price = priceElement.text();

                    // Extract the exact product link
                    String link = titleElement.attr("href");
                    if (!link.startsWith("http")) {
                        link = baseLink + link;
                    }

                    // Extract category or set as 'Uncategorized'
                    String category = categoryElement != null ? categoryElement.text() : "Uncategorized";

                    Product product = new Product();
                    product.setName(title);
                    product.setImage(imageUrl);
                    product.setPrice(price);
                    product.setCategory(category);
                    product.setPurchaseLink(link);

                    productRepository.save(product);
                    products.add(product);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return products;
    }
}






