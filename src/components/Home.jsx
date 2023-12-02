// eslint-disable-next-line no-unused-vars
import React from 'react';

const Home = ({ isDarkMode }) => {
  return (
    <div className={`container mx-auto p-6 ${isDarkMode ? 'dark' : 'light'}`}>
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg">
        Hello! Im Segun, a passionate developer. This is my portfolio where I showcase my skills and projects.
      </p>
      {/* Add more content or sections as needed */}
    </div>
  );
};

export default Home;


