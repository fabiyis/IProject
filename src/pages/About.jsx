
'use client';

import { Card } from 'flowbite-react';

function Component() {
  return (
    <div className="flex items-center justify-center h-screen">
    <Card className="max-w-md p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
      <img src="/img/seg1.JPG" alt="Profile" className="w-40 h-40 object-cover rounded-full mb-4" />
      <h5 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
        About Me
      </h5>
      <p className="text-gray-700 dark:text-gray-400 mb-4">
        Hi there! I am <span className="text-red-600">Segun</span>, a passionate frontend web developer based in Lagos, Nigeria.
      </p>
      <p className="text-gray-700 dark:text-gray-400 mb-4">
        I specialize in creating modern, responsive, and user-friendly web applications using technologies like HTML, JavaScript, React, and Node.js.
      </p>
      <p className="text-gray-700 dark:text-gray-400 mb-4">
        Living in the vibrant city of Lagos, I am dedicated to crafting digital experiences that not only meet the needs of users but also exceed expectations.
      </p>
      {/* Add more content or sections as needed */}
    </Card>
  </div>
  );
}

export default Component;
