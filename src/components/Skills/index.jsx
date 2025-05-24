import React from 'react';
import './index.css';

const Skills = () => {
  const skills = [
    {
      name: 'React.js',
      level: 'Advanced',
      icon: 'react'
    },
    {
      name: 'JavaScript',
      level: 'Advanced',
      icon: 'javascript'
    },
    {
      name: 'Node.js',
      level: 'Advanced',
      icon: 'nodejs'
    },
    {
      name: 'MongoDB',
      level: 'Advanced',
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
      icon: 'html5'
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
                <i className={`devicon-${skill.icon}-plain colored`} />
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
