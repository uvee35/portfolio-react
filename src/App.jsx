import React from "react";
import "@fontsource-variable/onest";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {/* Add more below if needed ✅*/}
    </div>
  );
}

export default App;
