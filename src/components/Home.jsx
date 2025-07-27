import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-section container-fluid d-flex flex-column flex-md-row align-items-center justify-content-center min-vh-100 py-5">
      
      {/* Big Background Text */}
      <h1 className="home-hello-top">hello</h1>

      {/* Profile Image */}
      <div className="text-center mb-4 mb-md-0 me-md-5 z-1">
        <div className="profile-wrapper shadow-lg rounded-circle overflow-hidden">
          <img
            src="/pictures.jpg"
            alt="Saikowshik"
            className="profile-img"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="text-section text-center text-md-start z-1 dark-text">
        <h1 className="display-5 fw-bold mb-3">
          Hey there, I'm <span className="text-primary">Immanneni Saikowshik</span>
        </h1>

       <p className="lead mb-4" style={{ color: '#1a1a1a' }}>
  "Final-year CSE student at Vasavi College of Engineering, passionate about building impactful tech. Skilled in AI/ML, full-stack, and cloud systems. Actively seeking roles in AI engineering, backend development, or full-stack roles to solve real-world problems."
</p>

        <div className="about-me mt-4">
          <h4 className="fw-semibold text-primary mb-3">About Me</h4>

          <p className="lead mb-3">
            I’m Immanneni Saikowshik — a passionate developer with a deep interest in Artificial Intelligence, Full-Stack Development, and system-level problem-solving. Whether it’s building scalable backend services or training custom AI models, I enjoy bridging technology with meaningful outcomes.
          </p>

          <p className="lead mb-3">
            Outside of code, I’m often exploring tech innovations, helping juniors crack interviews, or diving into the world of open source. I believe in pushing limits, learning constantly, and building solutions that matter.
          </p>

          <p className="lead mb-4">
            Let’s create something impactful together 🚀
          </p>

          <a
            href="https://drive.google.com/file/d/1HH828WHWRqwbVnDkbLcDDSoEe7z_tRK0/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg px-4 shadow-sm"
          >
            📄 View Resume
          </a>
          <a
  href="https://github.com/iskkowshik"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-primary btn-lg px-4 shadow-sm ms-3"
>
  💻 View My Work
</a>

        </div>
      </div>
    </div>
  );
};

export default Home;
