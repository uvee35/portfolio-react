import React from "react";
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
            <a href="#" className="project-link mx-2">
              Projects
            </a>
            <a href="#" className="about-me-link mx-2">
              Who am I?
            </a>
            <a href="#" className="contact-link mx-2">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
