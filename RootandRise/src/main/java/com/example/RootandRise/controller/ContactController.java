//package com.example.RootandRise.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.RootandRise.model.ContactForm;
//import com.example.RootandRise.service.EmailService;
//
//
//@RestController
//@RequestMapping("/send-message")
//@CrossOrigin(origins = "http://localhost:3000")  // Allow cross-origin requests only from this frontend URL
//public class ContactController {
//
//    @Autowired
//    private EmailService emailService;
//
//    @PostMapping
//    public ResponseEntity<String> sendMessage(@RequestBody ContactForm form) {
//        String from = form.getEmail();  // User's email
//        String to = "lavanyajs03@gmail.com"; // Admin's email
//        String subject = "New Message from " + form.getName(); // Dynamic subject line
//        String body = "Name: " + form.getName() + "\n"
//                    + "Phone: " + form.getPhone() + "\n"
//                    + "Message: \n" + form.getMessage(); // Email body content
//
//        try {
//            emailService.sendEmail(from, to, subject, body);
//            return ResponseEntity.ok("Message sent successfully!");
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body("Failed to send message.");
//        }
//    }
//}
//
//
