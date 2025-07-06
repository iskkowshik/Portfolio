import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FaTools, FaBrain, FaCode, FaCloud,
  FaServer, FaDatabase, FaRobot, FaUsers
} from 'react-icons/fa';
import '../styles/Skills.css';

const techSkills = [
  { icon: <FaCode />, title: 'Languages', desc: 'C, C++, Java (basic), Python, JavaScript, PHP' },
  { icon: <FaDatabase />, title: 'Databases', desc: 'Oracle, SQL, MongoDB, MySQL' },
  { icon: <FaCloud />, title: 'Cloud Services', desc: 'AWS (EC2, S3, RDS, ALB, Route53, Lambda)' },
  { icon: <FaTools />, title: 'DevOps Tools', desc: 'Docker, Kubernetes, Jenkins, Git' },
  { icon: <FaServer />, title: 'Technologies', desc: 'HTML, CSS, Node.js, React, Bootstrap' },
  { icon: <FaRobot />, title: 'Generative AI', desc: 'Agentic AI, RAG, LangChain, LLMs' },
  { icon: <FaBrain />, title: 'Academic Coursework', desc: 'DSA, DBMS, OS, OOPS, ML, CN, AI' },
  { icon: <FaUsers />, title: 'Libraries', desc: 'NumPy, Pandas, Matplotlib' }
];

const softSkills = 'Collaboration & Teamwork, Problem Solving, Communication, Critical Thinking';

const Skills = () => {
  return (
    <div className="skills-section container py-5">
      <h2 className="text-center fw-bold gradient-text mb-5">My Skills</h2>

      {/* Technical Skills */}
      <h4 className="text-secondary fw-semibold mb-4">Technical Skills</h4>
      <div className="row g-4">
        {techSkills.map((skill, idx) => (
          <div className="col-12 col-sm-6 col-lg-4" key={idx}>
            <div className="glass-card skill-card p-4 h-100 text-center">
              <div className="text-primary mb-2 fs-2">{skill.icon}</div>
              <h5 className="fw-bold mb-3">{skill.title}</h5>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {skill.desc.split(',').map((item, i) => (
                  <span className="tech-badge" key={i}>{item.trim()}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills */}
      <h4 className="text-secondary fw-semibold mt-5 mb-3">Soft Skills</h4>
      <div className="glass-card p-4 shadow-sm text-center">
        <h5 className="text-primary fw-bold mb-3">Soft Skills</h5>
        <div className="d-flex flex-wrap justify-content-center gap-2">
          {softSkills.split(',').map((skill, idx) => (
            <span className="tech-badge soft-badge" key={idx}>
              {skill.trim()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
