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
      <div className='w-full h-full flex items-center justify-center mt-16'>
        <div className='text-center hover:bg-gray-900'>
          <h1 className="text-5xl font-bold max-w-xl mb-4 text-orange-600 ">Hello! I am Segun</h1>
          <p className="text-2xl font-serif font-bold space-1 text-white">A Frontend developer from Nigeria.</p>
          <p className="mt-2 text-sm font-bold text-white">I love to build web that is responsive, clean, and user-friendly.</p>
        </div>
      </div>
      <div className='w-fit ml-6 mt-36 bg-red-300 hover:bg-green-500 hover:text-white border-2 border-c'>
        <h1 className=' text-slate-950 items-center font-mono text-2xl font-black hover:bg-green-500 hover:text-white'> Lets grow your <br/>business from <br/>the inside out..</h1>
        <Button className=" mb-2 cursor-pointer w-10/12 mt-2 ml-4 items-center font-bold " label="2">Hire us</Button>
      </div> 
    </div>
    <div className='mt-3'>
      <div className="min-h-screen flex flex-col justify-center items-end bg-cover bg-center" style={{ backgroundImage: 'url(/img/slider3.jpg)' }}>
        <div className=' -mt-56'>
          <h1 className="text-6xl font-extrabold mr-10 text-white mb-2 hover:bg-lime-600">MOBILE OPTIMIZED</h1>
          <p className="text-white text-3xl mr-12 font-bold hover:bg-lime-600 hover:w-fit">Website</p>
          <p className='mt-5 text-2xl text-lime-600 font-semibold hover:bg-slate-50 hover:w-fit'>To Work On All Device</p>
          <p1 className="text-slate-50 text-lg font-semibold mt-3 hover:bg-lime-600 hover:w-fit ">Mobile, Tablet or Computer Our Websites Just Work Fine.</p1>
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




