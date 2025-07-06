import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUniversity, FaSchool, FaGraduationCap } from 'react-icons/fa';
import '../styles/Education.css'; // Custom styles

const educationData = [
  {
    icon: <FaUniversity />,
    title: 'Bachelor of Technology - B.E CSE',
    institution: 'Vasavi College of Engineering, Hyderabad',
    duration: 'Nov 2022 – May 2026',
    grade: 'CGPA: 8.97'
  },
  {
    icon: <FaSchool />,
    title: 'Intermediate - MPC',
    institution: 'Oxford Junior College',
    duration: '2019 – 2021',
    grade: '97%'
  },
  {
    icon: <FaGraduationCap />,
    title: 'High School - SSC',
    institution: 'Oxford Concept School',
    duration: '2018 – 2019',
    grade: 'GPA: 10.0'
  }
];

const Education = () => {
  return (
    <div className="education-section container py-5">
      <h2 className="text-center fw-bold gradient-text mb-5">Education</h2>
      <div className="row g-4">
        {educationData.map((edu, idx) => (
          <div className="col-12 col-md-6 col-lg-4" key={idx}>
            <div className="card education-card h-100 p-4 text-center shadow-sm">
              <div className="fs-2 text-primary mb-3">{edu.icon}</div>
              <h5 className="fw-bold mb-2">{edu.title}</h5>
              <p className="text-muted mb-1">{edu.institution}</p>
              <p className="text-muted mb-1">{edu.duration}</p>
              <span className="grade-badge px-3 py-2 rounded-pill">
                {edu.grade}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
