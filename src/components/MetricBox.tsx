'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface MetricBoxProps {
  icon: React.ReactNode;
  value: number | string;
  label: string;
  gradient: string; // e.g. 'from-green-400 to-blue-500'
}

const MetricBox: React.FC<MetricBoxProps> = ({ icon, value, label, gradient }) => (
  <motion.div
    className="text-center hover:scale-105 transition-transform duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-[#FACC15]/30`}>
      {icon}
    </div>
    <h5 className="text-2xl font-bold text-[#EDEDED] truncate">{value}</h5>
    <p className="text-[#BDBDBD] text-sm">{label}</p>
  </motion.div>
);

export default MetricBox;
