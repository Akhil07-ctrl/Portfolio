import { FaCertificate } from "react-icons/fa";

import './index.css';

const Certificates = () => {
  const certificates = [
    {
      title: 'Full Stack Development with MERN Specialization',
      organization: 'NxtWave',
      date: '2025',
      description: 'Completed advanced React development course covering hooks, context, and state management.',
      image: 'https://res.cloudinary.com/dgsmgz8zl/image/upload/v1748174850/NxtWave_IRC-1_lvyyaq.png'
    },
    {
      title: '30 Days of Code Challenge',
      organization: 'NxtWave',
      date: '2025',
      description: 'Completed full stack development certification with projects in React, Node.js, and MongoDB.',
      image: 'https://res.cloudinary.com/dgsmgz8zl/image/upload/v1748174850/NxtWave_IRC-1_lvyyaq.png'
    },
    {
      title: 'AWS Certified Developer',
      organization: 'Amazon Web Services',
      date: '2022',
      description: 'Certified in AWS cloud development using services like Lambda, S3, and DynamoDB.',
      image: 'https://res.cloudinary.com/dgsmgz8zl/image/upload/v1748174850/NxtWave_IRC-1_lvyyaq.png'
    },
    {
      title: 'Professional Scrum Developer',
      organization: 'Scrum.org',
      date: '2021',
      description: 'Certified in Scrum methodology and agile software development practices.',
      image: 'https://res.cloudinary.com/dgsmgz8zl/image/upload/v1748174850/NxtWave_IRC-1_lvyyaq.png'
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
