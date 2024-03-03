import React from "react";
import "./hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hey, I'm Victor <badge>Available for hiring</badge>
        </h1>
        <p className="hero-description">
          <h2>
            +1 year experience. Web developer and App creator. From Leicester,
            United Kingdom 🇬🇧. Specialized in crafting unique digital
            experiences
          </h2>
        </p>
      </div>
    </section>
  );
}

export default Hero;
