import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axiosConfig"; // Import the configured Axios instance
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./SignupPage.css";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { username, email_or_phone: emailOrPhone, password };
      console.log("Submitting signup form with:", data);
      const response = await axios.post("/users/register", data);

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.error("There was an error creating the account!", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="signup-content">
        <img
          src="/images/ShoppinCart.png"
          alt="Delivery"
          className="signup-image"
        />
        <div className="signup-container">
          <h2>Create an account</h2>
          <p>Enter your details below</p>
          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <br />
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
            <input type="submit" value="Create Account" />
          </form>
          <p className="signup-login-link">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
