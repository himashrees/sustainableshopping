package com.example.RootandRise.repository;

import com.example.RootandRise.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {  // Changed Integer to Long
    User findByEmail(String email);
    User findByEmailAndPassword(String email, String password);
    boolean existsByEmail(String email); // Add this method
    
    // Optional method for finding a user by id (Optional is used to handle cases where the user may not exist)
    Optional<User> findById(Long id);
}
