import React from "react";
import { FaGrinStars, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column-left">
        <div className="footer-logo-brand">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/25539c29532269.55f7d6a0a8c71.jpg"
            className="footer-logo"
            alt="App Logo"
          />
          <h1 className="footer-brand-title">FootApp</h1>
        </div>

        <nav className="footer-nav">
          <a href="#" className="nav-link">
            About
          </a>
          <a href="#" className="nav-link">
            Contact
          </a>
          <a href="#" className="nav-link">
            Blog
          </a>
          <a href="#" className="nav-link">
            Cart
          </a>
        </nav>
      </div>

      <div className="footer-column-right">
        <p className="footer-stay-touch">Stay in touch</p>

        <div className="footer-social-icons">
          <a
            href="https://github.com/Aman-Narayan"
            className="social-icon social-icon-github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aman-narayan-74216b30b"
            className="social-icon social-icon-linkedin"
          >
            <FaLinkedin />
          </a>
          <a href="#" className="social-icon social-icon-other">
            <FaGrinStars />
          </a>
        </div>

        <p className="footer-copyright">
          © {new Date().getFullYear()} FootApp. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
