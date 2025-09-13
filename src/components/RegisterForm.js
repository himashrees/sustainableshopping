import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import "./RegisterForm.css";  // Make sure to import the updated CSS

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);  // For handling success message visibility
  const history = useHistory();

  const handleRegister = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      if (password.length < 8) {
        setError("Password should be at least 8 characters long.");
        return;
      }
      axios
        .post("http://localhost:8080/api/register", {
          name,
          email,
          phone, 
          password
        })
        .then((response) => {
          setSuccess(true); // Show success message
          setTimeout(() => {
            history.push("/login");  // Redirect after success
          }, 3000);  // Wait for 3 seconds before redirecting
        })
        .catch((error) => {
          console.error("Registration failed.", error);
          setError("Sorry! Registration failed.");
        });
    } else {
      setError("Passwords do not match.");
    }
  };

  return (
    <div className="form-container">
      <div className="form">
        <h3>SIGN UP</h3>
        {success && (
          <div className="success-message">
            <span>🎉</span> Registration Successful! Redirecting...
          </div>
        )}
        <form onSubmit={handleRegister}>
          <div className="input-container">
            <input
              placeholder="Name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <input
              placeholder="Phone Number"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              maxLength="10"
              required
            />
          </div>
          <div className="input-container">
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <input
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>
          {error && <div className="error">{error}</div>}
          <button type="submit" className="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;