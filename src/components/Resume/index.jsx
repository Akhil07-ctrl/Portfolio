import React from 'react';
import './index.css';

const Resume = () => {
  const resumeSections = [
    {
      title: 'Professional Summary',
      content: 'Experienced full-stack developer with a passion for building scalable web applications. Skilled in modern JavaScript frameworks, cloud technologies, and agile methodologies. Proven track record of delivering high-quality software solutions on time and within budget.'
    },
    {
      title: 'Technical Skills',
      content: [
        'Programming Languages: JavaScript, Python, Java',
        'Frontend: React.js, HTML5, CSS3',
        'Backend: Node.js, Express.js',
        'Databases: MongoDB, MySQL, PostgreSQL',
        'Cloud: AWS, Azure',
        'Tools: Git, Docker, Kubernetes'
      ]
    },
    {
      title: 'Projects',
      content: [
        {
          name: 'E-commerce Platform',
          description: 'Built a scalable e-commerce platform using React and Node.js with real-time inventory tracking and payment integration.',
          technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
        },
        {
          name: 'Social Media App',
          description: 'Developed a social media application with real-time chat, image sharing, and user authentication.',
          technologies: ['React', 'Firebase', 'Socket.io']
        }
      ]
    }
  ];

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <div className="resume-content">
          <div className="resume-main">
            {resumeSections.map((section, index) => (
              <div key={index} className="resume-section-item">
                <div className="section-header">
                  <h3>{section.title}</h3>
                  {section.icon && (
                    <FontAwesomeIcon icon={section.icon} className="section-icon" />
                  )}
                </div>
                {typeof section.content === 'string' ? (
                  <p className="section-text">{section.content}</p>
                ) : (
                  <div className="section-content">
                    {section.content.map((item, i) => (
                      <div key={i} className="section-item">
                        {typeof item === 'object' ? (
                          <div className="project-item">
                            <div className="project-header">
                              <h4>{item.name}</h4>
                              {item.period && (
                                <span className="project-period">{item.period}</span>
                              )}
                            </div>
                            <p className="project-description">{item.description}</p>
                            {item.technologies && (
                              <div className="tech-stack">
                                {item.technologies.map((tech, t) => (
                                  <span key={t} className="tech-tag">{tech}</span>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <p className="section-text">{item}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
