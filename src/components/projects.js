import React from 'react';
import '../styles/projects.css';

const Projects = () => {
  const projectList = [
    { title: 'Project 1', description: 'A full-stack application.' },
    { title: 'Project 2', description: 'A mobile app for social networking.' },
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
