import { FaCertificate } from "react-icons/fa";

import './index.css';

const Certificates = () => {
  const certificates = [
    {
      title: 'Full Stack Development with MERN Specialization',
      organization: 'NxtWave',
      date: '2025',
      description: 'Completed intensive training on building full-stack web applications using MongoDB, Express.js, React, and Node.js. Developed multiple end-to-end projects.',
      image: 'https://res.cloudinary.com/dgsmgz8zl/image/upload/v1748174850/NxtWave_IRC-1_lvyyaq.png'
    },
    {
      title: 'Node.js Certification',
      organization: 'NxtWave',
      date: '2025',
      description: 'Mastered backend development using Node.js, including Express.js, RESTful APIs, JWT authentication, and integration with MongoDB.',
      image: 'https://res.cloudinary.com/dgsmgz8zl/image/upload/v1748241429/NODE_JS-1_wfp49p.png'
    },
    {
      title: 'MySQL - Introduction to Databases',
      organization: 'NxtWave',
      date: '2024',
      description: 'Gained practical knowledge in relational databases, SQL queries, joins, constraints, and database schema design using MySQL.',
      image: 'https://res.cloudinary.com/dgsmgz8zl/image/upload/v1748241429/Introduction_to_Databases-1_kbgv0r.png'
    },
    {
      title: '30 Days of Code Challenge',
      organization: 'NxtWave',
      date: '2025',
      description: 'Completed 30-day coding challenge focused on daily problem solving in JavaScript, algorithmic thinking, and coding consistency.',
      image: 'https://res.cloudinary.com/dgsmgz8zl/image/upload/v1748233005/30_Days_of_Code_Challenge_x1xq1l.png'
    }
  ];


  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <div className="certificate-header">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <p className="organization">{cert.organization}</p>
                <p className="date">{cert.date}</p>
              </div>
              <div className="certificate-content">
                <p>{cert.description}</p>
              </div>
              <div className="certificate-badge">
                <FaCertificate style={{ fontSize: '2rem', color: '#FFD700' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
