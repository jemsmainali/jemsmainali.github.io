import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      {/* Updated logo with a modern, pro feel */}
      <div className="logo">
        <span className="logo-highlight">J.</span>M.
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/#/about">About</a>
        </li>
        <li>
          <a href="/#/services">Services</a>
        </li>
        <li>
          <a href="/#/projects">Projects</a>
        </li>
        
        <li>
          <a href="/#/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
