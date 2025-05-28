import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faCalendarAlt,
  faMapMarkerAlt,
  faChevronDown,
  faChevronUp,
  faExternalLinkAlt,
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [isIntersecting, setIsIntersecting] = useState({});
  const experienceRefs = useRef([]);

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
      website: "https://www.timekidspreschools.in",
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
      website: "https://www.time4education.com",
      description: "Worked across various departments to understand the organization’s internal operations and supported multiple process improvement initiatives.",
      responsibilities: [
        "Gained a comprehensive understanding of business operations through interdepartmental collaboration",
        "Worked on internal dashboards and reports to track KPIs and operational metrics",
        "Assisted in planning and executing brand marketing initiatives across digital and offline channels",
        "Contributed to improving CRM workflows and lead nurturing strategies using marketing automation tools",
      ],
      technologies: ["Business Operations", "Process Management", "Google Analytics", "Microsoft Excel", "Excel/Google Sheets", "CRM Tools", "Power BI"]
    },
    {
      id: 3,
      company: "WebTech Solutions",
      position: "Junior Web Developer",
      period: "Jun 2020 - Feb 2021",
      location: "On-site",
      website: "https://wtss.co.in/",
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

  // Toggle expanded state for a specific experience item
  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Set up intersection observer for animation
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsIntersecting(prev => ({
            ...prev,
            [entry.target.dataset.id]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    experienceRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      experienceRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Initialize refs array
  useEffect(() => {
    experienceRefs.current = experienceRefs.current.slice(0, experiences.length);
  }, [experiences.length]);

  return (
    <div className="experience-page">
      <div className="container">
        <h1 className="section-title">Professional Experience</h1>

        <div className="experience-content">
          {/* Timeline View */}
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                ref={el => experienceRefs.current[index] = el}
                data-id={exp.id}
                className={`timeline-item ${isIntersecting[exp.id] ? 'animate' : ''} ${expandedItems[exp.id] ? 'expanded' : ''}`}
              >
                <div className="timeline-marker" aria-hidden="true"></div>
                <div className="timeline-content">
                  <div className="timeline-header" onClick={() => toggleExpand(exp.id)}>
                    <div className="timeline-icon">
                      <FontAwesomeIcon icon={faBriefcase} />
                    </div>
                    <div className="timeline-title">
                      <h3>{exp.position}</h3>
                      <h4>{exp.company}</h4>
                      <div className="timeline-meta">
                        <span>
                          <FontAwesomeIcon icon={faCalendarAlt} /> {exp.period}
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faMapMarkerAlt} /> {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="timeline-toggle">
                      <FontAwesomeIcon icon={expandedItems[exp.id] ? faChevronUp : faChevronDown} />
                    </div>
                  </div>

                  <div className={`timeline-details ${expandedItems[exp.id] ? 'show' : ''}`}>
                    <p className="timeline-description">{exp.description}</p>

                    <div className="timeline-responsibilities">
                      <h5>Key Responsibilities:</h5>
                      <ul>
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="timeline-technologies">
                      <h5>Technologies Used:</h5>
                      <div className="tech-tags">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    {exp.website && (
                      <a href={exp.website} target="_blank" rel="noopener noreferrer" className="company-link">
                        Visit Company <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Stats */}
          <div className="experience-stats">
            <div className="stat-card">
              <div className="stat-number">{experiences.length}</div>
              <div className="stat-label">Companies</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">40+</div>
              <div className="stat-label">Projects</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="experience-cta">
          <p>Interested in my professional background?</p>
          <div className="cta-buttons">
            <Link to="/resume" className="cta-button primary">View My Resume</Link>
            <button onClick={handleDownloadResume} className="cta-button download">
              <FontAwesomeIcon icon={faDownload} /> Download Resume
            </button>
            <a href="mailto:akhilkundena@gmail.com" className="cta-button secondary">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;