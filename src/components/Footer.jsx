import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer text-center py-4">
      <div className="footer-icons mb-3">
        <a href="https://github.com/iskkowshik" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/kowshik-immanneni-063619264" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:kowshiksaikowshik696@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={24} />
        </a>
        <a href="https://x.com/immanneni93994" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </a>
      </div>
      <p className="mb-0 small text-light">&copy; {new Date().getFullYear()} Immanneni Saikowshik. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
