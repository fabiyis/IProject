// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button, Navbar } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


// eslint-disable-next-line react/prop-types
const NavBar = ({ isDarkMode, toggleDarkMode }) => {
    console.log('isDarkMode in NavBar:', isDarkMode);


  const buttonClass = `text-sm font-medium rounded-full ${isDarkMode ? 'bg-slate-700' : 'bg-slate-400'} text-white focus:outline-none`;
  const navbarClass = `navbar ${isDarkMode ? 'dark-mode-navbar' : ''}`;
  const backgroundColor = isDarkMode ? ' bg-rose-200' : '';

  return (
    <Navbar fluid rounded className={navbarClass} style={{ backgroundColor }}>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/img/seg.JPG" className="rounded-full w-10 mr-3 h-6 sm:h-9" alt="" />
        <span className={`self-center whitespace-nowrap text-xl font-semibold ${isDarkMode ? 'dark:text-white' : ''}`}>Segun</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button style={{ marginRight: '8px' }}>Download cv</Button>
        <Button onClick={toggleDarkMode} className={buttonClass} style={{ marginLeft: '8px' }}>
          {isDarkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
        </Button>
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Skills</Navbar.Link>
        <Navbar.Link href="#">Projects</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;

