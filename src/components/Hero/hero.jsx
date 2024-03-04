import React from "react";
import "./hero.css"; // Keep your custom styles as well
import ButtonComponent from "../ButtonComponent";
import logoImage from "/src/assets/me.jpeg";
import { Badge } from "react-bootstrap";

function Hero() {
  return (
    <section
      className="hero d-flex align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex align-items-center">
            <img
              src={logoImage}
              alt="Logo"
              style={{
                borderRadius: "50%",
                width: "120px",
                height: "120px",
                objectFit: "cover",
                marginRight: "20px",
              }}
            />
            <h1 style={{ fontSize: "3rem" }}>Hey, I'm Victor</h1>
            <badge>Available for hiring</badge>
          </div>
        </div>
        <p style={{ fontSize: "1.5rem" }}>
          +1 year experience. Web developer and App creator. From Leicester,
          United Kingdom 🇬🇧. Specialized in crafting unique digital experiences.
        </p>
        <button
          href="/src/assets/Cv-victor.pdf"
          download="Cv-victor.pdf"
          style={{ fontSize: "1.25rem", textDecoration: "none" }}
          className="button"
        >
          Download CV
        </button>{" "}
      </div>
    </section>
  );
}

export default Hero;
