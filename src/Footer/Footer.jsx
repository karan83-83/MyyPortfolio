// Footer.js
import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col left">
            <h3>My Portfolio</h3>
            <h4>
             Karan Panchal
            </h4>
            <p>Email: karanpan77@gmail.com</p>
            <p>Phone: 8707805229</p>

          </div>

          <div className="footer-col middle">
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={"/about"}>About Us</Link></li>
              <li><Link to={"/projects"}>Project</Link></li>
              <li><Link to={"/contact"}>Contact</Link></li>
             
            </ul>
            
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#partners">Partners</a></li>
            </ul>
          </div>

          <div className="footer-col right">
            <ul className="social-icons">
              <li><a href="https://www.instagram.com/_mr_soul___83/"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#twitter"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://www.facebook.com/profile.php?id=100087917567957"><i className="fab fa-facebook"></i></a></li>
              <li><a href="https://in.pinterest.com/pin/315181673934782817/"><i className="fab fa-pinterest"></i></a></li>
            </ul>
            <Link to={'/contact'} className="contact-btn" >Contact Us </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Karan All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
