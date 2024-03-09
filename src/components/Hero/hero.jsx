import React, { useState, useEffect } from "react";
import "./hero.css";

import logoImage from "/images/me.jpeg";

function Hero() {
  const initialMessage = "Hey, I'm Victor";
  const [displayText, setDisplayText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentCharIndex < initialMessage.length) {
        setDisplayText(
          (prevText) => prevText + initialMessage[currentCharIndex]
        );
        setCurrentCharIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Typing speed

    return () => clearInterval(typingInterval);
  }, [currentCharIndex]);

  return (
    <section
      className="hero d-flex align-items-center"
      style={{
        height: "100vh",
        marginTop: "px",
        paddingTop: "0px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9 d-flex align-items-center">
            <div className="d-flex flex-column">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "-50px",
                }}
              ></div>
              <img
                src={logoImage}
                alt="Logo"
                style={{
                  borderRadius: "50%",
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  marginBottom: "20px",
                }}
              />
              <h1
                style={{
                  fontSize: "8rem",
                  marginBottom: "70px",
                  fontFamily: "Arial, sans-serif",
                  textAlign: "center",
                }}
              >
                {displayText}
              </h1>
            </div>
          </div>
          <div className="col-lg-3 d-flex align-items-center justify-content-end"></div>
        </div>
        <p
          style={{
            fontSize: "2rem",
            textAlign: "center",
            fontFamily: "cursive",
          }}
        >
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
            className="download-btn"
            style={{
              fontSize: "1.5rem",
              textDecoration: "none",
              backgroundColor: "#ffc107",
              color: "black",
              padding: "15px 30px",
              borderRadius: "8px",
              marginRight: "10px",
              display: "inline-block",
            }}
          >
            Download CV
          </a>
          <a
            href="https://wa.me/447752117594?text=Hey%20Victor,%20I%20just%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20chat."
            target="_blank"
            className="chat-btn"
            style={{
              fontSize: "1.5rem",
              textDecoration: "none",
              backgroundColor: "#25D366",
              color: "white",
              padding: "15px 30px",
              borderRadius: "8px",
              display: "inline-block",
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
