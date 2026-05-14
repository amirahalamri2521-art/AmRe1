import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Search } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 5,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hidden lg:flex items-center gap-4 text-xs font-medium tracking-[0.2em] text-gold uppercase">
      <div className="flex flex-col items-center">
        <span>{timeLeft.days}d</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center">
        <span>{timeLeft.hours}h</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center">
        <span>{timeLeft.minutes}m</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center">
        <span>{timeLeft.seconds}s</span>
      </div>
    </div>
  );
};

const Navbar = ({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-8 py-3 rounded-full">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-playfair font-bold gold-gradient tracking-wider">
            JEDDAH 2026
          </h1>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium tracking-wide text-white/70">
            <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
            <a href="#workshops" className="hover:text-gold transition-colors">Workshops</a>
            <a href="#about" className="hover:text-gold transition-colors">About</a>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <CountdownTimer />
          
          <div className="flex items-center gap-4">
            <button className="p-2 hover:text-gold transition-colors interactive">
              <Search size={20} />
            </button>
            <button 
              onClick={toggleDarkMode}
              className="p-2 hover:text-gold transition-colors interactive"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="bg-gold text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-white transition-all interactive">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
