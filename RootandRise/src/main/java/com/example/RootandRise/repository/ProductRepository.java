package com.example.RootandRise.repository;

import com.example.RootandRise.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
