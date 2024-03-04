import React from "react";
import { Link } from "react-router-dom";
import "./header.css"; //

const Header = () => {
  return (
    <header className="fixed-top bg-black shadow-sm">
      <nav className="navbar container">
        <div className="logo">
          <span className="logo-uvee">Uvee</span>
          <span className="logo-dev">Dev</span>
        </div>
        <div className="header-content d-flex justify-content-between">
          <div className="theme-switcher">
            {/* Icons for theme switching */}
          </div>
          <div className="pages-links d-flex">
            <Link to="/projects" className="project-link mx-2">
              Projects
            </Link>
            <Link to="/about" className="about-me-link mx-2">
              Who am I?
            </Link>
          </div>
          <Link to="/contact" className="contact-link mx-2">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
