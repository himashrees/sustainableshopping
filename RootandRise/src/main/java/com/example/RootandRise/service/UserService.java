package com.example.RootandRise.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.RootandRise.repository.UserRepository;
import com.example.RootandRise.model.User;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    // Check if user exists by email
    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    // Find user by email
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    // Find user by email and password
    public User findByEmailAndPassword(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }

    // Save or update user
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    // Find user by ID
    public User findById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    // Reset password
    public void resetPassword(User user, String newPassword) {
        user.setPassword(newPassword);
        userRepository.save(user);
    }
}
