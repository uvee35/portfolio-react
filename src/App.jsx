import React, { UseEffect, UseState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource-variable/onest";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
          {/* Define more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
