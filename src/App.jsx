import React from 'react';
import Layout from './components/Layout/Layout';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import Education from './components/Sections/Education';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
