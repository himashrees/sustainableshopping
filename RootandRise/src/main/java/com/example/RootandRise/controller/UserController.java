package com.example.RootandRise.controller;

import java.util.Optional;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.RootandRise.model.User;
import com.example.RootandRise.repository.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // Constructor
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // User Registration
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        User storedUser = userRepository.findByEmail(user.getEmail());
        if (storedUser != null) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        } else {
            userRepository.save(user);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }

    // User Login - Return User ID
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");

        User user = userRepository.findByEmailAndPassword(email, password);
        if (user != null) {
            // Return user ID in a response object
            Map<String, Object> response = new HashMap<>();
            response.put("userId", user.getCid()); // Assuming 'cid' is the user ID
            return ResponseEntity.ok(response); // Return the response as JSON
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }


    // Get User Profile by ID
 
    @GetMapping("/{cid}/profile")
    public ResponseEntity<?> getUserProfile(@PathVariable Long cid) {
        Optional<User> user = userRepository.findById(cid);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());  // Return user data if found
        } else {
            return ResponseEntity.status(404).body("User not found");  // Return 404 error with message
        }
    }

    // Update User Profile by ID (cid)
    @PutMapping("/{cid}/profile")
    public ResponseEntity<?> updateUserProfile(@PathVariable Long cid, @RequestBody User updatedUser) {
        Optional<User> existingUser = userRepository.findById(cid);
        if (existingUser.isPresent()) {
            User user = existingUser.get();
            user.setName(updatedUser.getName());
            user.setEmail(updatedUser.getEmail());
            user.setPhone(updatedUser.getPhone());
            userRepository.save(user);
            return ResponseEntity.ok(user);  // Return updated user data
        } else {
            return ResponseEntity.status(404).body("User not found");  // Return 404 error with message
        }
    }



    // Forgot Password
    @PostMapping("/forgotPassword")
    public ResponseEntity<?> forgotPassword(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String newPassword = request.get("newPassword");

        User user = userRepository.findByEmail(email);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No user found with the given email address");
        }
        user.setPassword(newPassword);
        userRepository.save(user);

        return ResponseEntity.ok("Password reset successful");
    }
}
