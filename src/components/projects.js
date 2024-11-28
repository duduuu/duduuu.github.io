import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.section`
  padding: 2rem;
`;

const ProjectCard = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Projects = () => (
  <ProjectContainer id="projects">
    <h2>My Projects</h2>
    <ProjectCard>
      <h3>Project 1</h3>
      <p>React, Redux, Styled-Components</p>
    </ProjectCard>
    <ProjectCard>
      <h3>Project 2</h3>
      <p>Node.js, Express, MongoDB</p>
    </ProjectCard>
  </ProjectContainer>
);

export default Projects;