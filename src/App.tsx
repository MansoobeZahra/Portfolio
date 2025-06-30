import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import WelcomeSection from './components/WelcomeSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('welcome');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['welcome', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navigation activeSection={activeSection} />
      
      {/* Floating Easter Egg */}
      <motion.div
        className="fixed top-20 right-8 z-50 text-2xl"
        animate={{ 
          rotate: [0, 10, -10, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🚀
      </motion.div>

      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00FFCB] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <main className="relative z-10">
        <WelcomeSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Secret Quote Easter Egg */}
      <motion.div
        className="fixed bottom-4 left-4 text-xs text-gray-500 opacity-30 hover:opacity-100 transition-opacity cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        👁 "Don’t just collect data. Connect the dots."
      </motion.div>
    </div>
  );
}

export default App;