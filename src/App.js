import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <main>
      <About />
      <Projects />
      <Contact />
    </main>
  </>
);

export default App;
