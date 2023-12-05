import { Button, Navbar } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const NavBar = ({ isDarkMode, toggleDarkMode }) => {
  const buttonClass = `text-sm font-medium rounded-full ${isDarkMode ? 'bg-slate-700' : 'bg-slate-400'} text-white focus:outline-none`;
  const navbarClass = `navbar ${isDarkMode ? 'dark-mode-navbar' : ''}`;
  const backgroundColor = isDarkMode ? ' bg-rose-200' : '';

  return (
    <Navbar fluid rounded className={navbarClass} style={{ backgroundColor }}>
      <Navbar.Brand as={Link} to="/">
        <img src="/img/seg.JPG" className="rounded-full w-10 mr-3 h-6 sm:h-9" alt="" />
        <span className={`self-center whitespace-nowrap text-xl font-semibold ${isDarkMode ? 'dark:text-white' : ''}`}>
          <span className=' text-orange-700 font-extrabold text-3xl '>S</span>egun
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button style={{ marginRight: '6px' }}>Download cv</Button>
        <Button onClick={toggleDarkMode} className={buttonClass} style={{ marginLeft: '8px' }}>
          {isDarkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
        </Button>
      </div>
      <Navbar.Collapse className=" flex ">
        <Navbar.Link as={Link} to="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/about">
          About
        </Navbar.Link>
        <Navbar.Link as={Link} to="/skills">
          Skills
        </Navbar.Link>
        <Navbar.Link as={Link} to="/projects">
          Projects
        </Navbar.Link>
        <Navbar.Link as={Link} to="/contact">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;


