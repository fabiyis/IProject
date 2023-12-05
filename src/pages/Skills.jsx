'use client';

import { Progress } from 'flowbite-react';

// eslint-disable-next-line react/prop-types
function Component({ isDarkMode }) {
  const containerClass = `container mx-auto mt-10 px-6 md:px-26 lg:px-52 ${isDarkMode ? 'dark' : 'light'}`;
  const bgColorClass = `bg-${isDarkMode ? 'gray-800' : 'white'}`;
  const textColorClass = isDarkMode ? 'text-white' : 'text-gray-800';

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url(/img/off1.jpeg)' }}>
    <div className={`${containerClass} ${bgColorClass} ${textColorClass} py-5 mb-20 mt-5`}>
      <div className="mb-2">
        <div className={`text-2xl font-bold mb-2 text-red-700 font-mono ${textColorClass}`}>Skills</div>
        <Progress
          progress={80}
          progressLabelPosition="inside"
          textLabel="Web Design"
          textLabelPosition="outside"
          size="lg"
          labelProgress
          labelText
          className={isDarkMode ? 'dark-progress' : 'light-progress'}
          style={{ color: isDarkMode ? '#fff' : '#000' }} // Adjust text color for better visibility
        />
      </div>

      <div className="mb-8">
        <Progress
          progress={40}
          progressLabelPosition="inside"
          textLabel="App Design"
          textLabelPosition="outside"
          size="lg"
          labelProgress
          labelText
          className={isDarkMode ? 'dark-progress' : 'light-progress'}
        />
      </div>

      <div>
        <h2 className={`text-2xl font-bold mb-2 mt-10 text-red-700 font-mono ${textColorClass}`}>Languages</h2>
        <div className="mb-3">
          <Progress
            progress={80}
            progressLabelPosition="inside"
            textLabel="HTML"
            textLabelPosition="outside"
            size="lg"
            labelProgress
            labelText
            className={isDarkMode ? 'dark-progress' : 'light-progress'}
          />
        </div>
        <div>
          <Progress
            progress={80}
            progressLabelPosition="inside"
            textLabel="JavaScript"
            textLabelPosition="outside"
            size="lg"
            labelProgress
            labelText
            className={isDarkMode ? 'dark-progress' : 'light-progress'}
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Component;



