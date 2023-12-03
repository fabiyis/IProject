// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Home = ({ isDarkMode }) => {
  const backgroundStyle = {
    backgroundImage: `url('img/bg.JPG')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '600px',
    display: 'flex',
    flexDirection: 'column',
    color: isDarkMode ? '#fff' : '#000', // Adjust text color based on dark mode
  };

  return (
    <div style={backgroundStyle}>
        <div className='mt-10 w-fit h-fit ml-3'>
          <h1 className="text-5xl font-bold max-w-xl mb-4 mt-20 text-zinc-100">Hello! I am Segun</h1>
          <p className="text-2xl font-serif font-bold space-1 text-white">A Frontend developer from Nigeria.</p>
          <p className="mt-2 text-sm font-bold text-white">I love to build web that is responsive, clean, and user-friendly.</p>
        </div>
    </div>
  );
};

export default Home;




