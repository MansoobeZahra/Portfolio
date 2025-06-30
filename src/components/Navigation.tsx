import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, FolderOpen, Zap, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'welcome', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'projects', icon: FolderOpen, label: 'Projects' },
    { id: 'skills', icon: Zap, label: 'Skills' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-[#0A0F1C]/80 backdrop-blur-lg border border-[#FACC15]/30 rounded-full px-6 py-3 shadow-md shadow-[#FACC15]/10"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex space-x-6">
        {navItems.map(({ id, icon: Icon, label }) => (
          <motion.button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`p-3 rounded-full transition-all duration-300 text-sm font-semibold shadow-inner hover:shadow-[#FACC15]/30 hover:scale-110 ${
              activeSection === id
                ? 'bg-gradient-to-br from-[#FACC15] to-[#3B82F6] text-[#0A0F1C]'
                : 'text-[#EDEDED] hover:bg-[#FACC15]/20'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={label}
          >
            <Icon size={20} />
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;
