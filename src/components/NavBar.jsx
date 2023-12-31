import { Button, Navbar } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const NavBar = ({ isDarkMode, toggleDarkMode }) => {
  const buttonClass = `text-sm font-sm rounded-full ${isDarkMode ? 'bg-gray-400' : 'bg-gray-400'} text-white focus:outline-none`;
  const navbarClass = `navbar ${isDarkMode ? 'white' : '#333'}`;

  return (
    <Navbar fluid rounded className={navbarClass} style={{ backgroundColor: isDarkMode ? '#333' : 'white' }}>
      <Navbar.Brand as={Link} to="/"className=" text-orange-700">
        <img src="/img/seg.JPG" className="rounded-full w-10 mr-3 h-6 sm:h-9" alt="" />
        <span className={`self-center whitespace-nowrap text-3xl font-semibold ${isDarkMode ? 'white' : 'red'}`}>
          <span className=' text-lime-700 font-extrabold text-2xl font-serif '>Fabson INC.</span>
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button onClick={toggleDarkMode} className={buttonClass} style={{ marginLeft: '8px' }}>
          {isDarkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
        </Button>
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse className=' pr-62 text:var(--1f1534-hyphen, #1F1534) space hover:selection:'>
        <Navbar.Link as={Link} to="/"  style={{ fontSize: '1.2rem' }}>
          HOME
        </Navbar.Link>
        <Navbar.Link as={Link} to="/about"  style={{ fontSize: '1.2rem' }}>
          ABOUT
        </Navbar.Link>
        <Navbar.Link as={Link} to="/skills" style={{ fontSize: '1.2rem' }}>
          SKILLS
        </Navbar.Link>
        <Navbar.Link as={Link} to="/projects" style={{ fontSize: '1.2rem' }}>
          PROJECTS
        </Navbar.Link>
        <Navbar.Link as={Link} to="/contact"  style={{ fontSize: '1.2rem' }}>
          CONTACT
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;


