import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axiosConfig";  // Import the configured Axios instance
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./LoginPage.css";

export default function LoginPage() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/users/login', {
        email_or_phone: emailOrPhone,
        password: password
      });

      const { token, user } = response.data;
      localStorage.setItem('token', token);

      if (user.role === 'admin') {
        navigate('/admin'); // Redirect to admin panel
      } else {
        navigate('/'); // Redirect to the home page or user dashboard
      }
    } catch (error) {
      console.error("There was an error logging in!", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-content">
        <img src="/images/ShoppinCart.png" alt="Delivery" className="login-image" />
        <div className="login-container">
          <h2>Login to Exclusive</h2>
          <p>Enter your details below</p>
          <form className="login-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              id="email_or_phone" 
              name="email_or_phone" 
              placeholder="Email or Phone Number" 
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
            />
            <br />
            <br />
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <input type="submit" value="Login" />
          </form>
          <p className="login-signup-link">
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
