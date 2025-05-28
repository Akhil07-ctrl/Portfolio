import { FaCheckCircle } from "react-icons/fa"

import './index.css';

const Education = () => {
  const education = [
    {
      degree: 'MBA - Sales and Marketing',
      institution: "Bhavan's Vivekananda College",
      period: '2021 - 2023',
      location: 'Hyderabad, Telangana',
      description: 'Specialized in Sales and Marketing with a focus on market research, consumer behavior, brand management, and digital marketing strategies.',
      achievements: [
        'Graduated with distinction',
        'Presented market analysis case study',
        'Organized inter-college marketing fest',
        'Placement Coordinator – facilitated campus recruitment and corporate engagement'
      ]
    },
    {
      degree: 'B.Tech in Instrumentation and Control Engineering',
      institution: 'Dr B R Ambedkar National Institute of Technology',
      period: '2015 - 2019',
      location: 'Jalandhar, Punjab',
      description: 'Covered core subjects like process control, industrial automation, sensors, and embedded systems with exposure to programming and system design.',
      achievements: [
        'Team member in organizing North India’s largest cultural fest at NIT Jalandhar',
        'Developed an IoT-based heart rate monitoring system using Arduino for real-time health tracking',
      ]
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Sri Chaitanya Junior Kalasala',
      period: '2013 - 2015',
      location: 'Hyderabad, Telangana',
      description: 'Completed higher secondary education with a focus on Mathematics, Physics, and Chemistry.',
      achievements: [
        'Scored 978/1000 marks',
        'State-level science fair participant',
        'Consistent academic performer'
      ]
    },
    {
      degree: 'SSC (10th Grade)',
      institution: 'Sri Chaitanya Techno School',
      period: '2012 - 2013',
      location: 'Hyderabad, Telangana',
      description: 'Completed secondary school with strong foundation in science and mathematics.',
      achievements: [
        'Scored 9.8 GPA',
        'Won school-level science quiz',
        'Class topper in mathematics'
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
