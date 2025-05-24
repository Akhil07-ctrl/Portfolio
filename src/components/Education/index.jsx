import React from 'react';
import './index.css';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'Stanford University',
      period: '2016 - 2018',
      location: 'Stanford, CA',
      description: 'Focused on advanced computer science topics including machine learning, data structures, and algorithms.',
      achievements: [
        'Graduated with distinction',
        'Published research paper on AI',
        'Scholarship recipient'
      ]
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of California',
      period: '2012 - 2016',
      location: 'Berkeley, CA',
      description: 'Completed core computer science curriculum with emphasis on software engineering and web development.',
      achievements: [
        'Graduated with honors',
        'Member of ACM',
        'Won hackathon competition'
      ]
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <h3 className="education-degree">{edu.degree}</h3>
                <div className="education-meta">
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-period">{edu.period}</p>
                  <p className="education-location">{edu.location}</p>
                </div>
              </div>
              <div className="education-content">
                <p className="education-description">{edu.description}</p>
                <div className="education-achievements">
                  <h4>Achievements</h4>
                  <ul>
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="achievement-item">
                        <i className="fas fa-check-circle achievement-icon"></i>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
