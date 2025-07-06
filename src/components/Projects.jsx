import React, { useState } from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Patient Pulse – Online Doctor Appointment',
    description: `Built a full-stack healthcare web application using React, Node.js, Express, and MongoDB, deployed on AWS. The platform enables users to book doctor appointments, securely log in using JWT authentication, and manage personal health records. Key features include dynamic doctor filtering, real-time notifications, and emergency medical support for rural areas. Designed with a fully responsive UI to ensure smooth user experience across all devices.`,
    images: [
      '/Screenshot 2024-10-04 102248.png',
      '/Screenshot 2024-10-04 102355.png',
      '/Screenshot 2024-11-29 194918.png',
      '/Screenshot 2024-11-29 194935.png',
    ],
  },
  {
    title: 'AI-Based College ID Validator',
    description: `Developed a Dockerized image-processing microservice to verify the authenticity of college ID cards using a ResNet-based deep learning model and OCR-driven rule logic. The system detects template mismatches, missing fields, and image forgeries with over 95% accuracy. Built with FastAPI, PyTorch, and OpenCV, it includes robust REST APIs for validation, health checks, and versioning. The solution runs securely offline in containerized environments and is tested against 50+ real and fake ID scenarios, enhancing reliability and scalability in real-world deployments.`,
    images: [
      '/Screenshot 2025-05-26 172041.png',
      '/Screenshot 2025-05-26 172050.png',
      '/Screenshot 2025-06-28 185943.png',
      '/Screenshot 2025-06-28 185949.png',
    ],
  }
];

const Projects = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="projects-section">
      <div className="container py-5">
        <h2 className="text-center fw-bold gradient-text mb-5">Projects</h2>

        {projects.map((project, index) => (
          <div key={index} className="mb-5">
            <h4 className="text-primary fw-bold mb-2">{project.title}</h4>
            <p className="project-description">{project.description}</p>

            <div className="row g-3">
              {project.images.map((img, i) => (
                <div className="col-6 col-md-3" key={i}>
                  <div className="project-card" onClick={() => setSelectedImg(img)}>
                    <img src={img} alt={`${project.title} ${i + 1}`} className="project-img" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Modal for image preview */}
        {selectedImg && (
          <div className="modal-backdrop-custom">
            <div className="modal-content-custom position-relative">
              <button className="close-btn" onClick={() => setSelectedImg(null)} aria-label="Close">
                &times;
              </button>
              <img src={selectedImg} alt="Full Preview" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
