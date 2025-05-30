import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faHackerrank } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowRight, faCode, faServer, faMobileScreen, faDatabase, faDownload } from '@fortawesome/free-solid-svg-icons';

import ProjectCard from '../ProjectCard';
import featuredProjectsData from '../../data/featuredProjects';

import "./index.css";

const Home = () => {
  // State for form handling
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Validate form before submission
    if (!validateForm()) {
      // If validation fails, don't submit
      return;
    }

    // Set loading state to true
    setIsSubmitting(true);
    setSuccess(false);
    setError('');

    try {
      const data = new FormData(form);
      const response = await fetch("https://formspree.io/f/manorvrd", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSuccess(true);
        // Reset form and form data
        form.reset();
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        const result = await response.json();
        setError(result?.errors?.[0]?.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  }

  // Validate form data
  const validateForm = () => {
    const errors = {};

    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
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
              <a href="https://www.hackerrank.com/profile/akhilkundena" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faHackerrank} />
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
            {featuredProjectsData.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="home-projects-cta">
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
                  <a href="mailto:akhilkundena@gmail.com">akhilkundena@gmail.com</a>
                </div>
                <div className="contact-method">
                  <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
                  <a href="https://www.linkedin.com/in/kundena-akhil-4b7073170/" target="_blank" rel="noopener noreferrer">linkedin.com/in/kundena-akhil</a>
                </div>
              </div>
            </div>
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.name && <p className="error-message">{formErrors.name}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.email && <p className="error-message">{formErrors.email}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.subject && <p className="error-message">{formErrors.subject}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  {formErrors.message && <p className="error-message">{formErrors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {success && (
                  <p className="success-message">Message sent successfully! I'll get back to you soon.</p>
                )}
                {error && <p className="error-message">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;