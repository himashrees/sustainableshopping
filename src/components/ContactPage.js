import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import "./Contactpage.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
        const response = await fetch("http://localhost:8080/send-message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: formData.email, // User's email
                name: formData.name,  // User's name
                message: formData.message, // User's message
            }),
        });

        if (response.ok) {
            setStatus("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } else {
            const errorResponse = await response.text();
            setStatus(`Failed to send message. Error: ${errorResponse}`);
        }
    } catch (error) {
        setStatus(`Error occurred while sending message: ${error.message}`);
    }
};


  return (
    <div className="contact-page">
      <div className="logo-container">
        <FaLeaf className="leaf-icon" />
        <h1 className="logo-text">Root&Rise</h1>
      </div>

      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Fill out the form below to send us a message.</p>

      <div className="contact-info">
        <p><strong>Phone:</strong> +91-1234567890</p>
        <p><strong>Email:</strong> adminrootandrise@gmail.com</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>

      {status && <p className="status">{status}</p>}
    </div>
  );
}

export default ContactPage;
