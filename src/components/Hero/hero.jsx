import React from "react";
import "./hero.css";
import ButtonComponent from "../ButtonComponent";
import logoImage from "/src/assets/me.jpeg"; // Ensure the path is correct

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={logoImage} alt="Logo" className="hero-logo" />
        <div className="title-and-button">
          <h1 className="hero-title">Hey, I'm Victor</h1>
          <ButtonComponent>Available for hiring</ButtonComponent>
        </div>
        <article className="hero-description">
          <h2>
            +1 year experience. Web developer and App creator. From Leicester,
            United Kingdom 🇬🇧. Specialized in crafting unique digital
            experiences
          </h2>
        </article>
        <button className="cv-button">Download CV</button>
      </div>
    </section>
  );
}

export default Hero;
