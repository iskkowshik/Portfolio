import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Patient Pulse – Online Doctor Appointment',
    description: `Patient Pulse – Online Doctor Appointment',
    description: Built a full-stack healthcare web application using React, Node.js, Express, and MongoDB, deployed on AWS. The platform enables users to book doctor appointments, securely log in using JWT authentication, and manage personal health records. Key features include dynamic doctor filtering, real-time notifications, and emergency medical support for rural areas. Designed with a fully responsive UI to ensure smooth user experience across all devices.,`,
    github: 'https://github.com/iskkowshik/patient-pulse.git',
    techStack: ['react', 'nodejs', 'express', 'mongodb', 'aws', 'bootstrap'],
    images: [
      '/Screenshot 2024-10-04 102248.png',
      '/Screenshot 2024-10-04 102355.png',
      '/Screenshot 2024-11-29 194918.png',
      '/Screenshot 2024-11-29 194935.png',
    ],
  },
  {
    title: 'AI-Based College ID Validator',
    description: `AI-Based College ID Validator',
    description: Developed a Dockerized image-processing microservice to verify the authenticity of college ID cards using a ResNet-based deep learning model and OCR-driven rule logic. The system detects template mismatches, missing fields, and image forgeries with over 95% accuracy. Built with FastAPI, PyTorch, and OpenCV, it includes robust REST APIs for validation, health checks, and versioning. The solution runs securely offline in containerized environments and is tested against 50+ real and fake ID scenarios, enhancing reliability and scalability in real-world deployments.,`,
    github: 'https://github.com/iskkowshik/AI-ID-Validator.git',
    techStack: ['python', 'pytorch', 'opencv', 'fastapi', 'docker'],
    images: [
      '/Screenshot 2025-05-26 172041.png',
      '/Screenshot 2025-05-26 172050.png',
      '/Screenshot 2025-06-28 185943.png',
      '/Screenshot 2025-06-28 185949.png',
    ],
  }
];

const techIconMap = {
  react: 'devicon-react-original',
  nodejs: 'devicon-nodejs-plain',
  express: 'devicon-express-original',
  mongodb: 'devicon-mongodb-plain',
  aws: 'devicon-amazonwebservices-original',
  jwt: 'fas fa-key',
  bootstrap: 'devicon-bootstrap-plain',
  python: 'devicon-python-plain',
  pytorch: 'devicon-pytorch-original',
  opencv: 'devicon-opencv-plain',
  fastapi: 'devicon-fastapi-plain',
  docker: 'devicon-docker-plain',
  rest: 'fas fa-plug'
};

const Projects = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="projects-section">
      <div className="container py-5">
        <h2 className="text-center fw-bold gradient-text mb-5">Projects</h2>

        {projects.map((project, index) => (
          <div key={index} className="mb-5" data-aos="fade-up">
            <h4 className="text-primary fw-bold mb-2">{project.title}</h4>
            <p className="project-description">{project.description}</p>

            {/* Tech stack icons */}
            <div className="tech-icons mb-3" data-aos="fade-right">
             {project.techStack.map((tech, i) => (
  <div key={i} className="tech-icon-with-label text-center me-3" title={tech}>
    <i className={`${techIconMap[tech]} colored fs-3`}></i>
    <div className="tech-label mt-1 small">{tech.toUpperCase()}</div>
  </div>
))}

            </div>

            {/* GitHub button */}
            <a
              href={project.github}
              className="btn btn-dark mb-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github me-2"></i>
              View on GitHub
            </a>

            {/* Project screenshots */}
            <div className="row g-3">
              {project.images.map((img, i) => (
                <div className="col-6 col-md-3" key={i}>
                  <div className="project-card" onClick={() => setSelectedImg(img)} data-aos="zoom-in">
                    <img src={img} alt={`${project.title} ${i + 1}`} className="project-img" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Modal */}
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
