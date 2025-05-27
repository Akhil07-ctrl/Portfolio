import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowRight, faCode, faServer, faMobileScreen, faDatabase, faDownload } from '@fortawesome/free-solid-svg-icons';

import "./index.css";

const description = {
  nxtTrendz: "This project is a React-based e-commerce application that simulates an Amazon-like store. It features a login page, product listing, detailed product views, a shopping cart with add/update/remove functionalities, and a payment page. Protected routes ensure that only authenticated users access and uses React's Context API for cart state management.",
  loanManagerApplication: "The Loan Manager is a comprehensive web application built with React that facilitates loan management between users and administrators. The platform features a secure authentication system, allowing users to apply for loans while administrators can manage loan applications through a sophisticated dashboard that displays real-time statistics.",
  miniGames: "Mini Games is a React-based web application featuring four engaging browser games: Emoji Game, Memory Matrix, Rock Paper Scissors, and Card-Flip Memory Game. Built with modern React (v19) and Vite, this project offers a clean, responsive interface for users to select and play different mini-games."
}

const Home = () => {
  const [isNxtTrendzExpanded, setIsNxtTrendzExpanded] = useState(false);
  const [isLoanManagerApplicationExpanded, setIsLoanManagerApplicationExpanded] = useState(false);
  const [isMiniGamesExpanded, setIsMiniGamesExpanded] = useState(false);
  
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

  const toggleNxtTrendzReadMore = () => {
    setIsNxtTrendzExpanded(!isNxtTrendzExpanded);
  }

  const toggleLoanManagerApplicationReadMore = () => {
    setIsLoanManagerApplicationExpanded(!isLoanManagerApplicationExpanded);
  }

  const toggleMiniGamesReadMore = () => {
    setIsMiniGamesExpanded(!isMiniGamesExpanded);
  }


  return (
    <div className="home">
      {/* Hero Section */}
      <section id="hero" className="hero-section" tabIndex="-1">

        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-greeting">Hello, I'm</span>
            <h1 className="hero-title">Kundena Akhil</h1>
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
              <button onClick={handleDownloadResume} className="cta-button download">
                <FontAwesomeIcon icon={faDownload} /> Resume
              </button>
              <a href="#contact" className="cta-button secondary" onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}>Contact Me</a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/Akhil07-ctrl" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/kundena-akhil-4b7073170/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://x.com/akhil73602199" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="mailto:akhilkundena@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>

            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image-container">
              <img src="https://res.cloudinary.com/dgsmgz8zl/image/upload/v1748149098/PicsArt_05-04-07.03.57_m60noj.jpg" alt="Kundena Akhil" className="profile-image" />
            </div>
          </div>
        </div>

      </section>

      {/* About Section */}
      <section id="about" className="about-section" tabIndex="-1">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-intro">
                I'm a passionate Full Stack Developer with over 2 years of experience in building web applications
                that deliver exceptional user experiences.
              </p>
              <p>
                My journey in web development began during my undergraduate studies, and I've since worked with
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
                <h3 className="project-title">Nxt Trendz</h3>
                <p className="project-description">
                  {isNxtTrendzExpanded ? description.nxtTrendz : `${description.nxtTrendz.substring(0, 150)}...`}
                  <button onClick={toggleNxtTrendzReadMore} className="read-more-btn">
                    {isNxtTrendzExpanded ? " Read Less" : " Read More"}
                  </button>
                </p>
                <div className="project-tech">
                  <span>React + Vite</span>
                  <span>Context API</span>
                  <span>React Router</span>
                  <span>CSS</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/Akhil07-ctrl/Amazon-Clone.git" target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
                  <a href="https://akhil07-ctrl.github.io/Amazon-Clone/login" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Task Management App" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Loan Manager Application</h3>
                <p className="project-description">
                  {isLoanManagerApplicationExpanded ? description.loanManagerApplication : `${description.loanManagerApplication.substring(0, 150)}...`}
                  <button onClick={toggleLoanManagerApplicationReadMore} className="read-more-btn">
                    {isLoanManagerApplicationExpanded ? " Read Less" : " Read More"}
                  </button>
                </p>
                <div className="project-tech">
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>MongoDB</span>
                  <span>React + Vite</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/Akhil07-ctrl/Loan-Manager-Application.git" target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
                  <a href="https://loan-manager-application.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="Fitness Tracker" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Mini Games</h3>
                <p className="project-description">
                  {isMiniGamesExpanded ? description.miniGames : `${description.miniGames.substring(0, 150)}...`}
                  <button onClick={toggleMiniGamesReadMore} className="read-more-btn">
                    {isMiniGamesExpanded ? " Read Less" : " Read More"}
                  </button>
                </p>
                <div className="project-tech">
                  <span>React + Vite</span>
                  <span>CSS</span>
                  <span>React Icons</span>
                  <span>React Modal</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/Akhil07-ctrl/Mini-Games.git" target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
                  <a href="https://mini-games-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-cta">
            <a href="https://github.com/Akhil07-ctrl" target="_blank" rel="noopener noreferrer" className="cta-button primary">View All Projects</a>
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
                  <a href="mailto:akhilkundena@gmail.com">akhilkundena@gmail.com</a>
                </div>
                <div className="contact-method">
                  <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
                  <a href="https://www.linkedin.com/in/kundena-akhil-4b7073170/" target="_blank" rel="noopener noreferrer">linkedin.com/in/kundena-akhil</a>
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