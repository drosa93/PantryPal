import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Branding */}
        <div className="footer-branding">
          <h2 className="footer-title">
            Pantry Pal<span className="footer-c">©</span>
          </h2>
          <p className="footer-tagline">AI-powered recipes, made just for you.</p>
        </div>

        {/* Social Links */}
        <div className="footer-socials">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Pantry Pal. All rights reserved.
      </div>
    </footer>
  );
}
