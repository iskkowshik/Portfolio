import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-section d-flex align-items-center justify-content-center">
      <div className="glass-card text-center p-5">
        <h2 className="gradient-text fw-bold mb-3">Let's Connect</h2>
        <p className="text-muted fs-5 mb-4">
          “I'm always open to connecting with like-minded professionals, collaborating on impactful tech projects, or engaging in meaningful conversations.”
        </p>

        <div className="d-flex justify-content-center gap-4 flex-wrap mb-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kowshik-immanneni-063619264/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn linkedin"
          >
            <FaLinkedin size={36} />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/iskkowshik"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn github"
          >
            <FaGithub size={36} />
            <span>GitHub</span>
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/immanneni93994"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn twitter"
          >
            <FaTwitter size={36} />
            <span>Twitter</span>
          </a>

          {/* Email */}
          <a
            href="mailto:kowshiksaikowshik696@gmail.com"
            className="social-btn email"
          >
            <FaEnvelope size={36} />
            <span>Email</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918106235437"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn whatsapp"
          >
            <FaWhatsapp size={36} />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Contact Details */}
        <div className="contact-info mt-3">
          <p className="fs-6 mb-1">
            📞 <strong>+91 81062 35437</strong>
          </p>
          <p className="fs-6 mb-0">
            📧 <strong>kowshiksaikowshik696@gmail.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
