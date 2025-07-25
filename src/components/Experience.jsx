import React, { useState } from 'react';
import '../styles/Experience.css';
import { FaServer, FaBrain, FaDocker, FaEye, FaMicrochip } from 'react-icons/fa';

const images = [
  process.env.PUBLIC_URL + '/image-53 (1).png',
  process.env.PUBLIC_URL + '/WhatsApp Image 2025-05-22 at 15.19.53_6cb47bfe.jpg',
  process.env.PUBLIC_URL + '/WhatsApp Image 2025-05-22 at 15.25.43_dd699aa7.jpg',
  process.env.PUBLIC_URL + '/WhatsApp Image 2025-05-22 at 15.50.24_8a0b619a.jpg'
];

const techIcons = [
  { icon: <FaBrain />, label: "ResNet" },
  { icon: <FaEye />, label: "OCR" },
  { icon: <FaDocker />, label: "Docker" },
  { icon: <FaServer />, label: "FastAPI" },
  { icon: <FaMicrochip />, label: "Model Deployment" },
];

const Experience = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="experience-section-bg container-fluid py-5">
      <div className="container">
        <h2 className="text-center fw-bold gradient-text mb-4">Internship @ Turtil</h2>

        <p className="experience-description text-center mb-5 px-3">
          At Turtil, I worked as an <strong>AI Engineer Intern</strong> during <strong>May to July 2025</strong>,
          where I developed an image-based microservice to verify the authenticity of college ID cards.
          Using a <strong>ResNet-based classifier</strong> and <strong>OCR-driven rule logic</strong>,
          the system detected forgeries, template mismatches, and missing field anomalies with <strong>95%+ accuracy</strong>.
          I deployed it using <strong>FastAPI & Docker</strong>, exposed robust REST APIs, and validated it with
          <strong> 50+ real/fake ID cases</strong>.
        </p>

        <div className="tech-icons mb-5 d-flex flex-wrap justify-content-center gap-4">
          {techIcons.map((item, index) => (
            <div className="tech-icon-box" key={index} data-aos="zoom-in">
              <div className="icon">{item.icon}</div>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

        <div className="row g-4">
          {images.map((src, index) => (
            <div className="col-6 col-md-3" key={index}>
              <div className="experience-card" onClick={() => setSelectedImg(src)} data-aos="fade-up">
                <img src={src} alt={`Intern ${index + 1}`} className="experience-img" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImg && (
        <div className="modal-backdrop-custom">
          <div className="modal-content-custom position-relative">
            <button className="close-btn" onClick={() => setSelectedImg(null)} aria-label="Close">
              &times;
            </button>
            <img src={selectedImg} alt="Zoomed View" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
