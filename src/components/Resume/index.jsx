
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
        'Frontend: React + Vite, HTML5, CSS3',
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
          name: 'NxtTrendz (E-commerce Platform)',
          description: "This project is a React-based e-commerce application that simulates an Amazon-like store. It features a login page, product listing, detailed product views, a shopping cart with add/update/remove functionalities, and a payment page. Protected routes ensure that only authenticated users access and uses React's Context API for cart state management.",
          technologies: ['React + Vite', 'JWT Authentication', 'Context API', 'React Router']
        },
        {
          name: 'Loan Manager Application',
          description: 'The Loan Manager is a comprehensive web application built with React that facilitates loan management between users and administrators. The platform features a secure authentication system, allowing users to apply for loans while administrators can manage loan applications through a sophisticated dashboard that displays real-time statistics.',
          technologies: ['React + Vite', 'Node.js', 'Express.js', 'MongoDB', 'JWT Authentication']
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
