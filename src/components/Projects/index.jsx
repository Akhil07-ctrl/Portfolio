import { FaGithub } from 'react-icons/fa';

import ProjectCard from '../ProjectCard';
import projectsData from '../../data/projects';

import './index.css';

const Projects = () => {
  // Render the projects grid using the ProjectCard component
  return (
    <div className="projects-page">
      <div className="container">
        <div className="projects-header">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">
            A collection of my work showcasing my skills and experience in web development.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="projects-cta">
          <p className="cta-text">Want to see more? Check out my GitHub profile for a full list of my projects.</p>
          <div className="cta-buttons">
            <a href="https://github.com/Akhil07-ctrl" target='_blank' rel='noreferrer' className="cta-button primary">
              <FaGithub className="cta-icon" /> View GitHub Profile
            </a>
            <a href="mailto:akhilkundena@gmail.com" target="_blank" rel="noopener noreferrer" className="cta-button secondary">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
