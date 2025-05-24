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
          <div className="resume-left">
            <div className="profile-section">
              <h3>Profile</h3>
              <p className="profile-text">
                Experienced developer with a strong background in full-stack development and cloud technologies. 
                Proven ability to deliver high-quality software solutions and mentor junior developers.
              </p>
            </div>
            <div className="contact-section">
              <h3>Contact</h3>
              <ul className="contact-list">
                <li><i className="fas fa-envelope"></i> email@example.com</li>
                <li><i className="fas fa-phone"></i> +1 234 567 890</li>
                <li><i className="fab fa-linkedin"></i> linkedin.com/in/username</li>
                <li><i className="fab fa-github"></i> github.com/username</li>
              </ul>
            </div>
          </div>
          <div className="resume-right">
            {resumeSections.map((section, index) => (
              <div key={index} className="resume-section-item">
                <h3>{section.title}</h3>
                {typeof section.content === 'string' ? (
                  <p>{section.content}</p>
                ) : (
                  <div className="section-content">
                    {section.content.map((item, i) => (
                      <div key={i} className="section-item">
                        {typeof item === 'object' ? (
                          <div className="project-item">
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                            <div className="tech-stack">
                              {item.technologies.map((tech, t) => (
                                <span key={t} className="tech-tag">{tech}</span>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <p>{item}</p>
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
