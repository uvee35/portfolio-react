import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">UveeDev</div>
      <div className="header-content">
        <button className="cv-button">Download CV</button>
        <div className="theme-switcher">{/* Icons for theme switching */}</div>
        <div className="social-links">
          {/* Links 🔗*/}
          <a href="#" className="social-link">
            GitHub
          </a>
          <a href="#" className="social-link">
            LinkedIn
          </a>
          <a href="#" className="social-link">
            Email
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
