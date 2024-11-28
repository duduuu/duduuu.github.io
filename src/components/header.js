import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #333;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  &:hover {
    color: #007bff;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>My Portfolio</Logo>
    <Nav>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </Nav>
  </HeaderContainer>
);

export default Header;