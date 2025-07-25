import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://your-backend-api.com/contact', formData);
      alert('Message sent successfully!');
      console.log(response.data);

      // Reset the form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="contact-section d-flex flex-column align-items-center justify-content-center">
      {/* Existing Card */}
      <div className="glass-card text-center p-5 mb-5">
        <h2 className="gradient-text fw-bold mb-3">Let's Connect</h2>
        <p className="text-muted fs-5 mb-4">
          “I'm always open to connecting with like-minded professionals, collaborating on impactful tech projects, or engaging in meaningful conversations.”
        </p>

        <div className="d-flex justify-content-center gap-4 flex-wrap mb-4">
          {/* Social links */}
          <a href="https://www.linkedin.com/in/kowshik-immanneni-063619264/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
            <FaLinkedin size={36} /><span>LinkedIn</span>
          </a>
          <a href="https://github.com/iskkowshik" target="_blank" rel="noopener noreferrer" className="social-btn github">
            <FaGithub size={36} /><span>GitHub</span>
          </a>
          <a href="https://x.com/immanneni93994" target="_blank" rel="noopener noreferrer" className="social-btn twitter">
            <FaTwitter size={36} /><span>Twitter</span>
          </a>
          <a href="mailto:kowshiksaikowshik696@gmail.com" className="social-btn email">
            <FaEnvelope size={36} /><span>Email</span>
          </a>
          <a href="https://wa.me/918106235437" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
            <FaWhatsapp size={36} /><span>WhatsApp</span>
          </a>
        </div>

        <div className="contact-info mt-3">
          <p className="fs-6 mb-1">📞 <strong>+91 81062 35437</strong></p>
          <p className="fs-6 mb-0">📧 <strong>kowshiksaikowshik696@gmail.com</strong></p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container w-100 px-4 px-md-5" style={{ maxWidth: '600px' }}>
        <h3 className="text-center mb-4 fw-semibold">Send Me a Message</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
