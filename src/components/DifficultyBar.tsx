'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface DifficultyBarProps {
  label: string;
  value: number;
  color: string;
  total: number;
}

const DifficultyBar: React.FC<DifficultyBarProps> = ({ label, value, color, total }) => {
  const percentage = total ? Math.round((value / total) * 100) : 0;

  return (
    <motion.div
      className="text-center p-4 bg-[#0B0F1A] text-[#EDEDED] backdrop-blur-sm border border-[#3B82F6]/30 rounded-lg hover:scale-105 hover:shadow-[#FACC15]/30 transition-transform duration-300"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-2xl font-bold mb-1" style={{ color }}>
        {value}
      </div>
      <div className="text-sm text-[#BDBDBD]">{label}</div>
      <div className="w-full bg-[#1A253A] rounded-full h-2 mt-2 overflow-hidden">
        <motion.div
          className="h-2 rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

export default DifficultyBar;
