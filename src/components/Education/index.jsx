import { FaCheckCircle } from "react-icons/fa"

import './index.css';

const Education = () => {
  const education = [
    {
      degree: 'Master of Business Administration',
      institution: "Bhavan's Vivekananda College",
      period: '2021 - 2023',
      location: 'Hyderabad, Telangana',
      description: 'Focused on advanced computer science topics including machine learning, data structures, and algorithms.',
      achievements: [
        'Graduated with distinction',
        'Published research paper on AI',
        'Scholarship recipient'
      ]
    },
    {
      degree: 'Bachelor of Technology',
      institution: 'Dr B R Ambedkar National Institute of Technology',
      period: '2015 - 2019',
      location: 'Jalandhar, Punjab',
      description: 'Completed core computer science curriculum with emphasis on software engineering and web development.',
      achievements: [
        'Graduated with honors',
        'Member of ACM',
        'Won hackathon competition'
      ]
    },
    {
      degree: 'Intermediate',
      institution: 'Sri Chaitanya Junior Kalasala',
      period: '2013 - 2015',
      location: 'Hyderabad, Telangana',
      description: 'Completed core computer science curriculum with emphasis on software engineering and web development.',
      achievements: [
        'Graduated with honors',
        'Member of ACM',
        'Won hackathon competition'
      ]
    },
    {
      degree: 'SSC',
      institution: 'Sri Chaitanya Techno School',
      period: '2012 - 2013',
      location: 'Hyderabad, Telangana',
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
                      <li key={i}>
                        <FaCheckCircle style={{ color: 'green', marginRight: '0.5rem' }} />
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
