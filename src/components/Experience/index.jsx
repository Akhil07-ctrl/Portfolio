import React from 'react';
import './index.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'TechCorp',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Leading a team of developers in building scalable web applications using React and Node.js. Mentoring junior developers and implementing CI/CD pipelines.',
      techStack: ['React', 'Node.js', 'Docker', 'Kubernetes']
    },
    {
      title: 'Software Engineer',
      company: 'InnovateTech',
      period: '2020 - 2022',
      location: 'New York, NY',
      description: 'Developed high-performance web applications using modern JavaScript frameworks. Implemented RESTful APIs and optimized database queries.',
      techStack: ['React', 'Express', 'MongoDB', 'AWS']
    },
    {
      title: 'Junior Developer',
      company: 'StartUp',
      period: '2018 - 2020',
      location: 'Boston, MA',
      description: 'Contributed to the development of web applications and learned full-stack development best practices.',
      techStack: ['JavaScript', 'HTML/CSS', 'MySQL']
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-period">{exp.period}</p>
                <p className="experience-location">{exp.location}</p>
                <p className="experience-description">{exp.description}</p>
                <div className="tech-stack">
                  {exp.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
