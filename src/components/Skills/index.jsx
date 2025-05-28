
import './index.css';

const Skills = () => {
  const skills = [
    {
      name: 'React',
      level: 'Advanced',
      icon: 'react'
    },
    {
      name: 'Power BI',
      level: 'Intermediate',
      customIcon: 'https://res.cloudinary.com/dgsmgz8zl/image/upload/v1748161801/png-transparent-power-bi-business-intelligence-microsoft-analytics-microsoft-text-rectangle-logo-thumbnail_v1dpfw.png'
    },
    {
      name: 'Git/GitHub',
      level: 'Intermediate',
      icon: 'github'
    },
    {
      name: 'MySQL',
      level: 'Advanced',
      icon: 'mysql'
    },
    {
      name: 'JavaScript',
      level: 'Advanced',
      icon: 'javascript'
    },
    {
      name: 'Node.js',
      level: 'Expert',
      icon: 'nodejs'
    },
    {
      name: 'Express.js',
      level: 'Expert',
      customIcon: 'https://res.cloudinary.com/dgsmgz8zl/image/upload/v1748161041/express-js_o92kpx.png'
    },
    {
      name: 'MongoDB',
      level: 'Intermediate',
      icon: 'mongodb'
    },
    {
      name: 'Python',
      level: 'Intermediate',
      icon: 'python'
    },
    {
      name: 'HTML/CSS',
      level: 'Advanced',
      icon: ['html5', "css3"]
    },
    {
      name: 'Bootstrap',
      level: 'Advanced',
      icon: 'bootstrap'
    },
    {
      name: 'TypeScript',
      level: 'Expert',
      icon: 'typescript'
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                {skill.customIcon ? (
                  <img src={skill.customIcon} alt={`${skill.name} icon`} className="custom-icon" />
                ) : Array.isArray(skill.icon) ? (
                  skill.icon.map((ic, i) => (
                    <i key={i} className={`devicon-${ic}-plain colored`} />
                  ))
                ) : (
                  <i className={`devicon-${skill.icon}-plain colored`} />
                )}
              </div>

              <h3>{skill.name}</h3>
              <p className="skill-level">{skill.level}</p>
              <div className="skill-progress">
                <div className="progress-bar" style={{ width: skill.level === 'Advanced' ? '90%' : skill.level === 'Intermediate' ? '70%' : '50%' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
