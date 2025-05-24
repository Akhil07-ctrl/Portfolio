import React from 'react';
import './index.css';

const Certificates = () => {
  const certificates = [
    {
      title: 'Certified React Developer',
      organization: 'React Academy',
      date: '2023',
      description: 'Completed advanced React development course covering hooks, context, and state management.',
      image: 'react-cert.png'
    },
    {
      title: 'Full Stack Developer',
      organization: 'FreeCodeCamp',
      date: '2022',
      description: 'Completed full stack development certification with projects in React, Node.js, and MongoDB.',
      image: 'freecodecamp-cert.png'
    },
    {
      title: 'AWS Certified Developer',
      organization: 'Amazon Web Services',
      date: '2022',
      description: 'Certified in AWS cloud development using services like Lambda, S3, and DynamoDB.',
      image: 'aws-cert.png'
    },
    {
      title: 'Professional Scrum Developer',
      organization: 'Scrum.org',
      date: '2021',
      description: 'Certified in Scrum methodology and agile software development practices.',
      image: 'scrum-cert.png'
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
                <div className="certificate-image">
                  <img src={`/certificates/${cert.image}`} alt={cert.title} />
                </div>
                <div className="certificate-info">
                  <h3>{cert.title}</h3>
                  <p className="organization">{cert.organization}</p>
                  <p className="date">{cert.date}</p>
                </div>
              </div>
              <div className="certificate-content">
                <p>{cert.description}</p>
              </div>
              <div className="certificate-badge">
                <i className="fas fa-certificate"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
