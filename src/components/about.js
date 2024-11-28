import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 2rem;
  background: #f0f0f0;
`;

const About = () => (
  <AboutSection id="about">
    <h2>About Me</h2>
    <p>
      Hi, I'm a front-end developer passionate about creating interactive and
      responsive web applications.
    </p>
  </AboutSection>
);

export default About;