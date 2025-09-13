//package com.example.RootandRise.service;
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.mail.MailException;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.mail.javamail.MimeMessageHelper;
//import org.springframework.stereotype.Service;
//
//import jakarta.mail.MessagingException;
//import jakarta.mail.internet.MimeMessage;
//
//@Service
//public class EmailService {
//
//    @Autowired
//    private JavaMailSender emailSender;
//
//    public void sendEmail(String from, String to, String subject, String message) throws MessagingException, MailException {
//        MimeMessage mimeMessage = emailSender.createMimeMessage();
//        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
//        helper.setFrom(from);
//        helper.setTo(to);
//        helper.setSubject(subject);
//        helper.setText(message);
//        emailSender.send(mimeMessage);
//    }
//}
//
//
