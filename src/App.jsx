// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';


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
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Add other components or sections as needed */}
    </div>
  );
}

export default App;






