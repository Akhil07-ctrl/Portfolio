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
      company: "Tech Innovators Inc.",
      position: "Senior Full Stack Developer",
      period: "Jan 2023 - Present",
      location: "Remote",
      website: "https://example.com",
      description: "Leading the development of enterprise-level web applications using React, Node.js, and MongoDB. Implementing modern UI/UX designs and ensuring responsive behavior across all devices.",
      responsibilities: [
        "Architected and implemented scalable frontend solutions using React and Context API",
        "Developed RESTful APIs using Node.js and Express",
        "Implemented CI/CD pipelines for automated testing and deployment",
        "Mentored junior developers and conducted code reviews",
        "Optimized application performance and reduced load times by 40%"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "AWS", "Docker", "CI/CD"]
    },
    {
      id: 2,
      company: "Digital Solutions Ltd.",
      position: "Frontend Developer",
      period: "Mar 2021 - Dec 2022",
      location: "Hybrid",
      website: "https://example.com",
      description: "Worked on developing and maintaining multiple client-facing web applications. Focused on creating responsive, accessible, and performant user interfaces.",
      responsibilities: [
        "Built responsive web applications using React and Redux",
        "Collaborated with designers to implement pixel-perfect UI components",
        "Integrated third-party APIs and services",
        "Implemented unit and integration tests using Jest and React Testing Library",
        "Participated in agile development processes and sprint planning"
      ],
      technologies: ["React", "Redux", "JavaScript", "HTML5", "CSS3", "SASS", "Jest"]
    },
    {
      id: 3,
      company: "WebTech Solutions",
      position: "Junior Web Developer",
      period: "Jun 2020 - Feb 2021",
      location: "On-site",
      website: "https://example.com",
      description: "Started as an intern and quickly progressed to a junior developer role. Worked on frontend development tasks and gained experience with modern web technologies.",
      responsibilities: [
        "Developed and maintained company website using HTML, CSS, and JavaScript",
        "Assisted senior developers with implementing new features",
        "Fixed bugs and improved application performance",
        "Created responsive email templates",
        "Participated in code reviews and team meetings"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Git"]
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
              <div className="stat-number">15+</div>
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