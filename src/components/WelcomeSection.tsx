import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, BarChart3, TrendingUp, PieChart } from 'lucide-react';

const WelcomeSection: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Aspiring Data Analyst",
    "Visual Thinker",
    "Storyteller with Data"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="welcome" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Charts */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <BarChart3 size={100} className="text-[#0077FF]" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-32"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <TrendingUp size={80} className="text-[#b3940c]" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/3"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <PieChart size={120} className="text-[#0077FF]" />
        </motion.div>
      </div>

      <div className="text-center z-10 px-4">
        {/* Profile Image */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#FFD700] to-[#0077FF] p-1 neon-glow">
              <img
                src="/mee.png"
                alt="Aryan Singh"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -top-2 -right-2 text-2xl"
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
          ✨

            </motion.div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4 gradient-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Mansoob-e-Zahra
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          className="text-2xl md:text-3xl text-[#EAEAEA] mb-8 h-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.span
            key={currentRole}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="typing-animation"
          >
            {roles[currentRole]}
          </motion.span>
        </motion.div>

        {/* Floating Quote */}
        <motion.div
          className="floating mb-12 italic text-lg bg-gradient-to-r from-[#FFD700] to-[#0077FF] text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          "Turning data into insights, one visualization at a time" 💙
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={scrollToAbout}
          className="glass px-8 py-4 rounded-full text-[#0077FF] font-semibold text-lg hover-glow border-2 border-[#FFD700] transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enter My World 🌟
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-[#0077FF] w-8 h-8" />
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
