// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import FooterComp from './components/FooterComp';
import About from './pages/About';
import Skills from './pages/Skills';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
        <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          
        </Routes>

      </div>
      <FooterComp isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </Router>
  );
};

export default App;








