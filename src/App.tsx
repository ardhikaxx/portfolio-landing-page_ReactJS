import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import SocialMedia from './SocialMedia';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <SocialMedia />
    </div>
  );
};

export default App;