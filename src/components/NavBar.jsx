import { Button, Navbar } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const NavBar = ({ isDarkMode, toggleDarkMode }) => {
  const buttonClass = `text-sm font-medium rounded-full ${isDarkMode ? 'bg-gray-400' : 'bg-gray-400'} text-white focus:outline-none`;
  const navbarClass = `navbar ${isDarkMode ? 'white' : '#333'}`;

  return (
    <Navbar fluid rounded className={navbarClass} style={{ backgroundColor: isDarkMode ? '#333' : 'white' }}>
      <Navbar.Brand as={Link} to="/"className=" text-orange-700">
        <img src="/img/seg.JPG" className="rounded-full w-10 mr-3 h-6 sm:h-9" alt="" />
        <span className={`self-center whitespace-nowrap text-3xl font-semibold ${isDarkMode ? 'white' : 'red'}`}>
          <span className=' text-lime-700 font-extrabold text-4xl font-serif '>SeGun</span>
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button onClick={toggleDarkMode} className={buttonClass} style={{ marginLeft: '8px' }}>
          {isDarkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
        </Button>
      </div>
      <Navbar.Collapse className=" flex gap-5">
        <Navbar.Link as={Link} to="/" active style={{ fontSize: '1.2rem' }}>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/about" style={{ fontSize: '1.2rem' }}>
          About
        </Navbar.Link>
        <Navbar.Link as={Link} to="/skills" style={{ fontSize: '1.2rem' }}>
          Skills
        </Navbar.Link>
        <Navbar.Link as={Link} to="/projects" style={{ fontSize: '1.2rem' }}>
          Projects
        </Navbar.Link>
        <Navbar.Link as={Link} to="/contact"style={{ fontSize: '1.2rem' }}>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;


