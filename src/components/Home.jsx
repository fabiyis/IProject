import { Button } from 'flowbite-react';
// eslint-disable-next-line react/prop-types
const Home = ({ isDarkMode }) => {
  const backgroundStyle = {
    backgroundImage: `url('img/off abt.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '600px',
    display: 'flex',
    flexDirection: 'column',
    color: isDarkMode ? '#fff' : '#000', 
  };

  return (
  <>
    <div style={backgroundStyle}>
      <div className="w-full h-full flex items-center justify-center mt-10">
        <div className="text-center hover:bg-gray-900">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-xl mb-4 text-orange-600">
           Hello! I am Segun
          </h1>
          <p className="text-lg md:text-2xl lg:text-2xl font-serif font-thin space-1 text-white">
            A Frontend developer from Nigeria.
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
      <div style={{ marginRight:100  }}>
        <h1 className='text-4xl font-extrabold text-white -mr-5 mt-4 bg-black'>WEBSITE DESIGN</h1>
        <h2 className='text-3xl font-thin text-white mb-3 bg-black'>For only $200</h2>
        <h3 className=' text-2xl font-thin text-white mb-2 '>Why Using Our Services ?</h3>
        <div className="flex">
          <svg className="w-4 h-4 mt-1 mr-2 text-white bg-lime-600 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
          </svg>
          <h1 className="mb-2 text-white font-bold bg-black">Free Lifetime Support</h1>
        </div> 
        <div className="flex">
          <svg className="w-4 h-4 mt-1 mr-2 text-white bg-lime-600 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
          </svg>
          <h1 className="mb-2 text-white font-bold bg-black">Unlimited Round of changes</h1>
        </div> 
      </div>
    </div>
      <div className='w-fit ml-6 mt-30 bg-black hover:bg-green-500 hover:text-white border-1 border-x-2 rounded-md mt-5'>
        <h1 className=' text-white items-center font-mono text-2xl font-black hover:bg-green-500 hover:text-white justify-center ml-1'> Lets grow your <br/>business from <br/>the inside out..</h1>
        <Button className=" mb-2 cursor-pointer w-10/12 mt-2 ml-4 items-center font-bold " label="2">Contact Us</Button>
      </div> 
    </div>
    <div className='mt-3 '>
      <div className="min-h-screen flex flex-col justify-center items-end bg-cover bg-center" style={{ backgroundImage: 'url(/img/slider3.jpg)' }}>
        <div className=' -mt-56 ml-5'>
          <h1 className="text-6xl font-extrabold mr-10 text-white mb-2 hover:bg-lime-600">MOBILE OPTIMIZED</h1>
          <p className="text-white text-3xl mr-12 font-bold hover:bg-lime-600 hover:w-fit">Website</p>
          <p className='mt-5 text-2xl text-white font-semibold hover:bg-lime-600 hover:w-fit'>To Work On All Devices</p>
          <p1 className="text-slate-50 text-lg font-semibold mt-3 hover:bg-lime-600 hover:w-fit ">Mobile, Tablet or Computer, Our Websites Just Work Fine.</p1>
          <div>
            <Button className=" mb-2 cursor-pointer w-fit mt-10  items-center font-bold " label="2">Mobile Friendly Websites</Button>
          </div>
        </div>
      </div>  
    </div>
 </>   
  );
};

export default Home;




