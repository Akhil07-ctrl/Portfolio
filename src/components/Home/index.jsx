import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowRight, faCode, faServer, faMobileScreen, faDatabase } from '@fortawesome/free-solid-svg-icons';
import "./index.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section id="hero" className="hero-section" tabIndex="-1">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-greeting">Hello, I'm</span>
            <h1 className="hero-title">John Doe</h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-description">
              I build exceptional digital experiences with modern technologies.
              Specializing in creating responsive web applications with clean, efficient code.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="cta-button primary" onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}>View My Work</a>
              <a href="#contact" className="cta-button secondary" onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}>Contact Me</a>
            </div>
            <div className="hero-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="mailto:contact@example.com" className="social-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image-container">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="John Doe" className="profile-image" />
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <a href="#about" onClick={(e) => {
            e.preventDefault();
            document.getElementById('about').scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
            <div className="mouse"></div>
            <p>Scroll down</p>
          </a>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="about-section" tabIndex="-1">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-intro">
                I'm a passionate Full Stack Developer with over 5 years of experience in building web applications
                that deliver exceptional user experiences.
              </p>
              <p>
                My journey in web development began during my computer science studies, and I've since worked with
                various technologies across the stack. I specialize in JavaScript ecosystems, particularly React for
                frontend and Node.js for backend development.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends
                and best practices. When I'm not coding, you can find me hiking, reading tech blogs, or contributing
                to open-source projects.
              </p>
              <div className="about-cta">
                <Link to="/resume" className="text-link">
                  View my resume <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
            <div className="skills-overview">
              <div className="skill-card">
                <div className="skill-icon">
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <h3>Frontend</h3>
                <p>React, Vue, Angular, JavaScript, TypeScript, HTML/CSS, SASS</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">
                  <FontAwesomeIcon icon={faServer} />
                </div>
                <h3>Backend</h3>
                <p>Node.js, Express, Django, Flask, RESTful APIs, GraphQL</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">
                  <FontAwesomeIcon icon={faMobileScreen} />
                </div>
                <h3>Mobile</h3>
                <p>React Native, Flutter, Responsive Design, Progressive Web Apps</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">
                  <FontAwesomeIcon icon={faDatabase} />
                </div>
                <h3>Database</h3>
                <p>MongoDB, PostgreSQL, MySQL, Firebase, Redis</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="projects-section" tabIndex="-1">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" alt="E-commerce Platform" />
              </div>
              <div className="project-content">
                <h3 className="project-title">E-commerce Platform</h3>
                <p className="project-description">
                  A full-featured e-commerce platform with product management, cart functionality, payment processing, and user authentication.
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Stripe</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Task Management App" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Task Management App</h3>
                <p className="project-description">
                  A collaborative task management application with real-time updates, task assignment, and progress tracking.
                </p>
                <div className="project-tech">
                  <span>Vue.js</span>
                  <span>Express</span>
                  <span>PostgreSQL</span>
                  <span>Socket.io</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="Fitness Tracker" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Fitness Tracker</h3>
                <p className="project-description">
                  A mobile-first fitness tracking application with workout plans, progress visualization, and social features.
                </p>
                <div className="project-tech">
                  <span>React Native</span>
                  <span>Firebase</span>
                  <span>Redux</span>
                  <span>D3.js</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-cta">
            <Link to="/projects" className="cta-button primary">View All Projects</Link>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="contact-section" tabIndex="-1">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together</h3>
              <p>
                I'm currently available for freelance work and full-time positions.
                If you have a project that needs some creative touch, or if you're looking
                to hire a developer, feel free to reach out.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                  <a href="mailto:contact@example.com">contact@example.com</a>
                </div>
                <div className="contact-method">
                  <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com/in/johndoe</a>
                </div>
              </div>
            </div>
            <div className="contact-form-container">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Your message" required></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;