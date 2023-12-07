'use client';

function About() {
  const containerStyle = {
    padding: '0 1rem',
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url(/img/vsc.jpg)' }}>
      <div className="text-center text-white" style={containerStyle}>
        <h5 className=" text-5xl font-extrabold mb-2 text-white border-b-4 border-white inline-block">
          About Me
        </h5>
        <p className="mb-4 text-white font-bold text-2xl hover:bg-lime-500 hover:text-white transition-all duration-300">
          Hi there! I am <span className="text-orange-700 font-bold text-3xl">Segun</span>, a passionate frontend web developer based in Lagos, Nigeria.<br/>
          I specialize in creating modern, responsive, and user-friendly <br/> web applications using technologies like HTML, JavaScript, React, and Node.js.
        </p>
      </div>
    </div>
  );
}

export default About;




