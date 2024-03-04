import React from "react";
import "./hero.css";
import ButtonComponent from "../ButtonComponent";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title w-full mx-auto lg:w-[740px] py-44">
          Hey, I'm Victor{" "}
          <ButtonComponent>Available for hiring</ButtonComponent>
        </h1>
        <p className="hero-description">
          <h2>
            +1 year experience. Web developer and App creator. From Leicester,
            United Kingdom 🇬🇧. Specialized in crafting unique digital
            experiences
          </h2>
        </p>
        <button className="cv-button">Download CV</button>
      </div>
    </section>
  );
}

export default Hero;
