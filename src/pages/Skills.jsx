'use client';

// eslint-disable-next-line react/prop-types
function Skills({ isDarkMode }) {
  const listStyles = isDarkMode? { color: 'white' } : { color: 'blue-600' };

  return (
     <div className="min-h-screen justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url(/img/Laptop-Se.jpg)' }}>
      <div className=" mb-32 pt-10 ">
        <h1 className="items-center justify-center text-center font-thin text-5xl -mt-3  ">A Website Design You Can Trust!</h1>
      </div>
     <div className="flex flex-col sm:flex-row  justify-center">
      <div className="mb-8 sm:mr sm:mb-0">
      <h1 className="text-4xl font-extrabold mb-6 text-lime-600 ml-2 bg-slate-300 w-fit">Our Teams</h1>
      <div className="card mx-4 bg-gray-800 dark:text-white text-white rounded-md p-6">
        <ul style={listStyles}>
          <div className="flex">
            <svg className="w-4 h-4 mt-1 mr-2 text-gray-800 dark:text-white bg-lime-600 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
            </svg>
            <li className="mb-2">Expert Website Designers</li>
          </div> 
          <div className="flex">
            <svg className="w-4 h-4 mt-1 mr-2 text-gray-800 dark:text-white bg-lime-600 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
            </svg>
            <li className="mb-2">Skilled Website Developers</li>
          </div> 
          <div className="flex">
            <svg className="w-4 h-4 mt-1 mr-2 text-gray-800 dark:text-white bg-lime-600 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
            </svg>
            <li className="mb-2">Talented Programers</li>
          </div>
          <div className="flex">
            <svg className="w-4 h-4 mt-1 mr-2 text-gray-800 dark:text-white bg-lime-600 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
            </svg>
            <li className="mb-2">Creative Graphic Designers</li>
          </div>
        </ul>
      </div>
    </div>

    <div className="card mx-4 text-white  dark:text-white bg-gray-800 rounded-md p-6  mt-16 mb-10 ">
      <ul style={listStyles}>
        <div className="flex">
            <svg className="w-4 h-4 mt-1 mr-2 text-gray-800 dark:text-white bg-lime-600 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
            </svg>
           <li className="mb-2">Logo designers</li>
        </div>
        <div className="flex">
            <svg className="w-4 h-4 mt-1 mr-2 text-gray-800 dark:text-white bg-lime-600 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
            </svg>
            <li className="mb-2 text-lg">iPhone App Developers</li>
        </div>
        <div className="flex">
           <svg className="w-4 h-4 mt-1 mr-2 text-gray-800 dark:text-white bg-lime-600 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
           </svg>
           <li className="mb-2">Online Marketing Analysts</li>   
        </div> 
        <div className="flex">
           <svg className="w-4 h-4 mt-1 mr-2 text-gray-800 dark:text-white bg-lime-600 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
           </svg>
           <li className="mb-2">Products Designers..</li>   
        </div>  
      </ul>
    </div>

    <div>
      <h1 className="text-4xl font-extrabold mb-6 ml-3 text-lime-600 w-fit bg-slate-300">Our Services</h1>
    <div className="card mx-4 dark:text-white text-white rounded-md p-6  bg-gray-800 ">
      <ul style={listStyles}>
          <div className="flex">
            <svg className="w-4 h-4 mt-1 mr-2 text-gray-800 dark:text-white bg-lime-600 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
            </svg>
            <li className="mb-2"> Website Designers</li>
          </div> 
          <div className="flex">
            <svg className="w-4 h-4 mt-1 mr-2 text-gray-800 dark:text-white bg-lime-600 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
            </svg>
            <li className="mb-2">Website Developments</li>
          </div> 
          <div className="flex">
            <svg className="w-4 h-4 mt-1 mr-2 text-gray-800 dark:text-white bg-lime-600 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
            </svg>
            <li className="mb-2">Online Store</li>
          </div> 
          <div className="flex">
            <svg className="w-4 h-4 mt-1 mr-2 text-gray-800 dark:text-white bg-lime-600 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
            </svg>
            <li className="mb-2">iPhone, iPad & Android Apps</li>
          </div>            
      </ul>
    </div>
    </div>

    <div className="card mx-4 text-white rounded-md p-6 mt-16 mb-10 dark:text-white  bg-gray-800 ">
      <ul style={listStyles}>
        <div className="flex">
          <svg className="w-4 h-4 mt-1 mr-2 text-gray-800 dark:text-white bg-lime-600 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
          </svg>
          <li className="mb-2">Experience Website Designers</li>
        </div>   
        <div className="flex">
          <svg className="w-4 h-4 mt-1 mr-2 text-gray-800 dark:text-white bg-lime-600 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
          </svg>
          <li className="mb-2">Skilled Website Developer</li>
        </div>   
        <div className="flex">
          <svg className="w-4 h-4 mt-1 mr-2 text-gray-800 dark:text-white bg-lime-600 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
          </svg>
          <li className="mb-2">Talented Programmer</li>
        </div>   
        <div className="flex">
          <svg className="w-4 h-4 mt-1 mr-2  text-gray-800 dark:text-white bg-lime-600 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
          </svg>
          <li className="mb-2 ">Creative Graphic Designers..</li>
        </div>   
      </ul>
    </div>
  </div>
</div>
  );
}

export default Skills;



