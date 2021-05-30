import React from 'react';
import Contact from './components/Contact';
import Education from './components/Education';
import Home from './components/Home';
import Info from './components/Info';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './sass/_app.scss';

const App = () => {
  return (
    <div className="app__container">
      <Home />
      <Info />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;
