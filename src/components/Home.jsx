import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-section container-fluid d-flex flex-column flex-md-row align-items-center justify-content-center min-vh-100 py-5">
      {/* Profile Image */}
      <div className="text-center mb-4 mb-md-0 me-md-5">
        <div className="profile-wrapper shadow-lg rounded-circle overflow-hidden">
          <img
            src="/pictures.jpg"
            alt="Saikowshik"
            className="profile-img"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="text-section text-center text-md-start">
        <h1 className="display-4 fw-bold mb-3">
          Hey there, I'm <span className="text-primary">Immanneni Saikowshik</span>
        </h1>
        <p className="lead mb-4" style={{ color: '#1a1a1a' }}>
  A curious mind with a builder’s spirit — I thrive on turning real-world challenges into impactful solutions.
  From winning contests to deploying production-grade systems, I believe in learning fast, building bold, and delivering value.
</p>


        <a href="/Sai_Kowshik_Intern_Resume.pdf" download className="btn btn-primary btn-lg px-4 shadow-sm">
          📄 Download CV
        </a>
      </div>
    </div>
  );
};

export default Home;
