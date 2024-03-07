import React from "react";
import "./hero.css";

import logoImage from "/src/assets/me.jpeg";

function Hero() {
  return (
    <section
      className="hero d-flex align-items-center"
      style={{
        height: "100vh",
        marginTop: "20px",
        paddingTop: "0px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex flex-column align-items-center">
            <img
              src={logoImage}
              alt="Logo"
              style={{
                borderRadius: "50%",
                width: "120px",
                height: "120px",
                objectFit: "cover",
                marginBottom: "20px",
              }}
            />
            <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
              Hey, I'm Victor
            </h1>
            <span
              style={{
                backgroundColor: "#2E8B57",
                color: "white",
                padding: "1px 4px",
                borderRadius: "4px",
                marginBottom: "10px",
              }}
            >
              Available for hiring
            </span>
          </div>
        </div>
        <p style={{ fontSize: "1.5rem", textAlign: "center" }}>
          +1 year experience. Web developer and App creator. From Leicester,
          United Kingdom 🇬🇧.
        </p>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a
            href="/src/assets/Cv-victor.pdf"
            download="Cv-victor.pdf"
            className="download-btn" // Add class for hover effect
            style={{
              fontSize: "1.25rem",
              textDecoration: "none",
              backgroundColor: "#ffc107", // Example color
              color: "black",
              padding: "3px 6px",
              borderRadius: "5px",
              marginRight: "10px",
              display: "inline-block", // Ensure the element respects padding and borderRadius
            }}
          >
            Download CV
          </a>
          <a
            href="https://wa.me/447752117594?text=Hey%20Victor,%20I%20just%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20chat."
            target="_blank"
            className="chat-btn" // Add class for hover effect
            style={{
              fontSize: "1.25rem",
              textDecoration: "none",
              backgroundColor: "#25D366", // WhatsApp color
              color: "white",
              padding: "3px 6px",
              borderRadius: "5px",
              display: "inline-block", // Ensure the element respects padding and borderRadius
            }}
          >
            Let's Chat
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
