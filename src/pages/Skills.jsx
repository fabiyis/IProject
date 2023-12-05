'use client';
import { Progress } from 'flowbite-react';

// eslint-disable-next-line react/prop-types
function Component({ isDarkMode }) {
  const containerClass = `container mx-auto px-6 md:px-26 lg:px-52 ${isDarkMode ? 'dark' : 'light'}`;
  
  const textColorClass = isDarkMode ? 'text-white' : 'text-blue-600';

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url(/img/Laptop-Se.jpg)' }}>
    <div className={`${containerClass}   ${textColorClass} py-5 -mt-20 bg-stone-700 `}>
      <div className="mb-2">
        <div className={`text-2xl font-bold mb-2 text-orange-700 font-mono underline ${textColorClass}`}>Skills</div>
        <Progress
          progress={80}
          progressLabelPosition="inside"
          textLabel="Web Design"
          textLabelPosition="outside"
          size="lg bold"
          labelProgress
          labelText
          className={isDarkMode ? 'dark-progress' : 'light-progress'}
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
        <h2 className={`text-2xl font-bold mb-2 mt-10 text-orange-700 font-mono underline ${textColorClass}`}>Languages</h2>
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



