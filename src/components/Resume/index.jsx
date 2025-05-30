
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faBriefcase,
  faGraduationCap,
  faCode,
  faUser,
  faCalendarAlt,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { FaCheckCircle } from "react-icons/fa";

import './index.css';

const Resume = () => {
  // Function to handle resume download
  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/Kundena Akhil(T).pdf';
    link.download = 'Kundena Akhil(T).pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Experience data
  const experiences = [
    {
      id: 1,
      company: "T.I.M.E. Kids Pvt. Ltd.",
      position: "Assistant Manager",
      period: "Mar 2024 - Jan 2025",
      location: "On-site",
      description: "Contributed to improving web platforms for parents and teachers, with performance and accessibility enhancements using the MERN stack.",
      responsibilities: [
        "Assisted in developing teacher and parent portals, reducing load times by 20% and boosting engagement by 15%",
        "Supported MERN stack integration into the LMS, increasing online course accessibility by 10%",
        "Collaborated on agile projects to help maintain 98% uptime and achieve a 25% reduction in reported bugs",
        "Provided first-level technical support and data analysis, enhancing user satisfaction by 20%"
      ],
      technologies: ["Power BI", "React", "Node.js", "Express", "MongoDB", "Agile", "Data Analysis"]
    },
    {
      id: 2,
      company: "T.I.M.E.",
      position: "Management Trainee",
      period: "Jan 2023 - Feb 2024",
      location: "On-site",
      description: "Worked across various departments to understand the organization's internal operations and supported multiple process improvement initiatives.",
      responsibilities: [
        "Gained a comprehensive understanding of business operations through interdepartmental collaboration",
        "Worked on internal dashboards and reports to track KPIs and operational metrics",
        "Assisted in planning and executing brand marketing initiatives across digital and offline channels",
        "Contributed to improving CRM workflows and lead nurturing strategies using marketing automation tools"
      ],
      technologies: ["Business Operations", "Process Management", "Google Analytics", "Microsoft Excel", "CRM Tools", "Power BI"]
    },
    {
      id: 3,
      company: "WebTech Solutions",
      position: "Junior Web Developer",
      period: "Jun 2020 - Feb 2021",
      location: "On-site",
      description: "Started as an intern and quickly progressed to a junior developer role. Worked on frontend development tasks and gained experience with modern web technologies.",
      responsibilities: [
        "Developed and maintained company website using HTML, CSS, and JavaScript",
        "Assisted senior developers with implementing new features",
        "Fixed bugs and improved application performance",
        "Created responsive email templates",
        "Participated in code reviews and team meetings"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Git"]
    }
  ];

  // Education data
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
        "Team member in organizing North India's largest cultural fest at NIT Jalandhar",
        "Developed an IoT-based heart rate monitoring system using Arduino for real-time health tracking"
      ]
    }
  ];

  const resumeSections = [
    {
      title: 'Professional Summary',
      icon: faUser,
      content: 'Experienced full-stack developer with a passion for building scalable web applications. Skilled in modern JavaScript frameworks, cloud technologies, and agile methodologies. Proven track record of delivering high-quality software solutions on time and within budget.'
    },
    {
      title: 'Technical Skills',
      icon: faCode,
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
      title: 'Work Experience',
      icon: faBriefcase,
      content: experiences
    },
    {
      title: 'Education',
      icon: faGraduationCap,
      content: education
    },
    {
      title: 'Projects',
      icon: faCode,
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
        <div className="resume-header">
          <h2 className="section-title">Resume</h2>
          <button className="download-resume-btn" onClick={handleDownloadResume}>
            <FontAwesomeIcon icon={faDownload} /> Download Resume
          </button>
        </div>
        <div className="resume-content">
          <div className="resume-main">
            {resumeSections.map((section, index) => (
              <div key={index} className="resume-section-item">
                <div className="section-header">
                  {section.icon && (
                    <FontAwesomeIcon icon={section.icon} className="section-icon" />
                  )}
                  <h3>{section.title}</h3>
                </div>

                {/* Professional Summary */}
                {typeof section.content === 'string' ? (
                  <p className="section-text">{section.content}</p>
                ) : (
                  <div className="section-content">
                    {/* Conditional rendering for different section types */}
                    {section.title === 'Work Experience' && (
                      section.content.map((exp, i) => (
                        <div key={i} className="experience-item">
                          <div className="experience-header">
                            <h4>{exp.position}</h4>
                            <div className="experience-company">
                              <span className="company-name">{exp.company}</span>
                            </div>
                            <div className="experience-meta">
                              <span className="experience-period">
                                <FontAwesomeIcon icon={faCalendarAlt} /> {exp.period}
                              </span>
                              <span className="experience-location">
                                <FontAwesomeIcon icon={faMapMarkerAlt} /> {exp.location}
                              </span>
                            </div>
                          </div>
                          <p className="experience-description">{exp.description}</p>

                          <div className="experience-responsibilities">
                            <h5>Key Responsibilities:</h5>
                            <ul>
                              {exp.responsibilities.map((responsibility, idx) => (
                                <li key={idx}>
                                  <FaCheckCircle className="responsibility-icon" />
                                  {responsibility}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="tech-stack">
                            {exp.technologies.map((tech, t) => (
                              <span key={t} className="tech-tag">{tech}</span>
                            ))}
                          </div>
                        </div>
                      ))
                    )}

                    {/* Education Section */}
                    {section.title === 'Education' && (
                      section.content.map((edu, i) => (
                        <div key={i} className="education-item">
                          <div className="education-header">
                            <h4>{edu.degree}</h4>
                            <div className="education-institution">
                              <span>{edu.institution}</span>
                            </div>
                            <div className="education-meta">
                              <span className="education-period">
                                <FontAwesomeIcon icon={faCalendarAlt} /> {edu.period}
                              </span>
                              <span className="education-location">
                                <FontAwesomeIcon icon={faMapMarkerAlt} /> {edu.location}
                              </span>
                            </div>
                          </div>
                          <p className="education-description">{edu.description}</p>

                          <div className="education-achievements">
                            <h5>Achievements:</h5>
                            <ul>
                              {edu.achievements.map((achievement, idx) => (
                                <li key={idx}>
                                  <FaCheckCircle className="achievement-icon" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))
                    )}

                    {/* Projects Section and other content types */}
                    {section.title !== 'Work Experience' && section.title !== 'Education' && (
                      section.content.map((item, i) => (
                        <div key={i} className="section-item">
                          {typeof item === 'object' && item.name ? (
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
                      )))}
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
