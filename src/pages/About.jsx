'use client';

function About() {
  const containerStyle = {
    padding: '0 1rem',
  };

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: 'url(/img/seg1.JPG)' }}>
      <div className=" text-white mt-10 ml-10" style={containerStyle}>
        <h5 className=" text-5xl font-extrabold mb-3 text-white border-b-4 border-white inline-block">
          About Me
        </h5>
        <p className="mb-4 text-black bg-slate-400 rounded-lg font-thin text-2xl hover:bg-lime-500 w-fit hover:text-white transition-all duration-300">
          Hi there! I am <span className="text-orange-700 font-bold text-3xl">Segun</span>, a passionate <br/>Frontend Web Developer based in Lagos<br/> Nigeria.
          I specialize in creating modern<br/> Responsive, and user-friendly Web<br/> Applications using Technologies like<br/> HTML, JavaScript, React, and Node.js.
        </p>
      </div>
      <div className="ml-11 mt-7">
        <h className="text-5xl font-thin"> What We Do</h>
        <h1 className="text-4xl font-thin ">We Are Your Personal Digital</h1>
        <h3 className="text-3xl font-bold ">Service From Start to End!</h3>
      </div>
    </div>
  );
}

export default About;




