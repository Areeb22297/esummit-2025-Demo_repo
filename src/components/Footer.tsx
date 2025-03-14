
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="texture-overlay"></div>
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">E-Summit IIITD</h3>
          <p className="footer-description">
            Join us for the biggest entrepreneurship summit at IIIT Delhi
          </p>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/speakers">Speakers</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/sponsors">Sponsors</Link></li>
            <li><Link to="/contact">Get in touch</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <address>
            <p>IIIT-Delhi</p>
            <p>Okhla Industrial Estate, Phase III</p>
            <p>New Delhi, India - 110020</p>
            <p className="email">Email: esummit@iiitd.ac.in</p>
          </address>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 E-Summit IIITD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
