import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css"; //

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-black shadow-sm">
      <div className="container d-flex justify-content-between">
        <div className="logo d-flex align-items-center">
          <span className="logo-uvee">Uvee</span>
          <span className="logo-dev">Dev</span>
        </div>
        <div className="pages-link">
          <Link to="/" className="home-link mx-2">
            Home
          </Link>
          <Link to="/projects" className="project-link mx-2">
            Projects
          </Link>
          <Link to="/about" className="about-me-link mx-2">
            Who am I?
          </Link>
          <Link to="/contact" className="contact-link mx-2">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
