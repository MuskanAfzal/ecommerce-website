import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <section id="subscribe">
        <h2>Subscribe</h2>
        <p>Get 10% off your first order</p>
        <form action="#" className="footer-form">
          <div class="email-input-container">
            <input
              type="email"
              id="email"
              name="email"
              required
              class="email-input"
              placeholder="Enter your email"
            />
            <button type="submit" class="submit-button">
              <i class="fa fa-arrow-right"></i>
            </button>
          </div>
        </form>
      </section>

      <section id="support">
        <h2>Support</h2>
        <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
        <p>
          Email: <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
        </p>
        <p>Phone: +88015-88888-9999</p>
      </section>

      <section id="account">
        <h2>Account</h2>
        <ul>
          <li>
            <a href="#">My Account</a>
          </li>
          <li>
            <a href="#">Login / Register</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
          <li>
            <a href="#">Wishlist</a>
          </li>
        </ul>
      </section>

      <section id="quick-link">
        <h2>Quick Link</h2>
        <ul>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </section>
    </div>
  );
}
