import React, { useState } from 'react';
import '../styles/Experience.css';

const images = [
  '/image-53 (1).png',
  '/WhatsApp Image 2025-05-22 at 15.19.53_6cb47bfe.jpg',
  '/WhatsApp Image 2025-05-22 at 15.25.43_dd699aa7.jpg',
  '/WhatsApp Image 2025-05-22 at 15.50.24_8a0b619a.jpg'
];

const Experience = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="experience-section-bg container-fluid py-5">
      <div className="container">
        <h2 className="text-center fw-bold gradient-text mb-4">Internship @ Turtil Technologies</h2>

        <p className="experience-description text-center mb-5 px-3">
          At Turtil, I’m working as an <strong>AI Engineer Intern</strong> where I developed an image-based microservice that verifies the authenticity of college ID cards.
          Using a <strong>ResNet-based classifier</strong> and <strong>OCR-driven rule logic</strong>, the system detects image forgeries, template mismatches, and missing field anomalies — 
          achieving <strong>95%+ classification accuracy</strong>. I deployed the solution using <strong>FastAPI and Docker</strong> for secure offline inference,
          and exposed robust REST APIs (validation, health, version) backed by a test suite with <strong>50+ real/fake ID scenarios</strong>. 
          This project deepened my expertise in <strong>computer vision</strong>, <strong>model deployment</strong>, and <strong>backend integration</strong>.
        </p>

        <div className="row g-4">
          {images.map((src, index) => (
            <div className="col-6 col-md-3" key={index}>
              <div className="experience-card" onClick={() => setSelectedImg(src)}>
                <img src={src} alt={`Intern ${index + 1}`} className="experience-img" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal with close button */}
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
