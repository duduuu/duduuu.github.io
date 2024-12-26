import React from 'react';
import Header from './components/header';
import About from './components/about';
import Work from './components/work';
import Honor from './components/honor';
import Education from './components/education';

const App = () => (
  <>
    <Header />
    <main>
      <About />
      <Work />
      <Honor />
      <Education />
    </main>
  </>
);

export default App;
