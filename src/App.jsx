import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About'; 
import Projects from './components/Projects/Projects'; 
import Contact from './components/Contact/Contact'; 
import Footer from './components/Footer/Footer'; 
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
