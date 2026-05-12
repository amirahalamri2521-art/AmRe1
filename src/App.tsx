import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import { WorkshopTimeline, AIRecommendation, RegistrationCTA } from './components/ExtraFeatures';
import CustomCursor from './components/CustomCursor';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <Hero />
        <BentoGrid />
        <WorkshopTimeline />
        <AIRecommendation />
        <RegistrationCTA />
      </main>

      <footer className="py-12 px-6 border-t border-white/5 text-center text-white/20 text-xs tracking-widest uppercase">
        <p>© 2026 BUILD THE VIBE - JEDDAH ART COLLECTIVE. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

export default App;
