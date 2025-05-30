import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './index.css';

// Custom arrow component for the slider
const SliderArrow = ({ direction, onClick }) => (
  <button 
    className={`slider-arrow ${direction}`} 
    onClick={onClick}
    aria-label={`${direction} arrow`}
  >
    <FontAwesomeIcon icon={direction === 'prev' ? faChevronLeft : faChevronRight} />
  </button>
);

// Project Card Component
const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [_currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <SliderArrow direction="prev" />,
    nextArrow: <SliderArrow direction="next" />,
    beforeChange: (current, next) => setCurrentImageIndex(next)
  };
  
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image-container">
        <Slider {...sliderSettings}>
          {project.images.map((image, index) => (
            <div key={index} className="project-slide">
              <img src={image} alt={`${project.title} screenshot ${index + 1}`} />
              <div className={`slide-indicator ${isHovered ? 'visible' : ''}`}>
                {index + 1}/{project.images.length}
              </div>
            </div>
          ))}
        </Slider>
        
        <div className={`project-overlay ${isHovered ? 'visible' : ''}`}>
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="overlay-button"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
          </a>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">
          {isExpanded ? project.description : `${project.description.substring(0, 150)}...`}
          <button onClick={toggleReadMore} className="read-more-btn">
            {isExpanded ? " Read Less" : " Read More"}
          </button>
        </p>
        
        <div className="project-features">
          <h4>Key Features:</h4>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="project-tech">
          <h4>Tech Stack:</h4>
          {project.tech.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        
        <div className="project-links">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <FontAwesomeIcon icon={faGithub} /> View Code
          </a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;