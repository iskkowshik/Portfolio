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

const logos = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg", alt: "MySQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", alt: "C++" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg", alt: "Deep Learning" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", alt: "AI" }
];

const softSkills = 'Collaboration & Teamwork, Problem Solving, Communication, Critical Thinking';

const Skills = () => {
  return (
    <div className="skills-section container py-5">
      <h2 className="text-center fw-bold gradient-text mb-5">My Skills</h2>

      {/* ✅ Auto-Scrolling Logos with Labels */}
      <div className="auto-scroll-wrapper mb-5">
        <div className="scroll-track d-flex align-items-center">
          {[...logos, ...logos].map((logo, idx) => (
            <div className="text-center mx-3" key={idx}>
              <img src={logo.src} alt={logo.alt} height={48} />
              <div className="small mt-1">{logo.alt}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Technical Skills (No glass-card) */}
      <h4 className="text-secondary fw-semibold mb-4">Technical Skills</h4>
      <div className="row g-4">
        {techSkills.map((skill, idx) => (
          <div className="col-12 col-sm-6 col-lg-4" key={idx}>
            <div className="skill-card p-4 h-100 text-center">
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

      {/* ✅ Soft Skills (No glass-card) */}
      <h4 className="text-secondary fw-semibold mt-5 mb-3">Soft Skills</h4>
      <div className="skill-card p-4 shadow-sm text-center">
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
