import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 2rem;
  background: #e9ecef;
`;

const Contact = () => (
  <ContactContainer id="contact">
    <h2>Contact Me</h2>
    <p>Email: example@example.com</p>
  </ContactContainer>
);

export default Contact;