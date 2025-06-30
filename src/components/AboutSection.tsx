import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Heart, Brain, Target } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300">
            Where data meets passion 🔥
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Floating Pen Animation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass p-8 rounded-2xl neon-glow">
              <motion.div
                className="absolute -top-4 -left-4 text-4xl"
                animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <PenTool className="text-[#FFD700] w-8 h-8" />
              </motion.div>

              <h3 className="text-2xl font-bold text-[#F5F5F5] mb-4">
                My Story
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a data enthusiast who sees numbers not just as values, but as stories waiting to be told.
                My journey began with a simple curiosity — why do patterns exist? — and evolved into a passion for uncovering insights through data analysis and machine learning.
                I enjoy building models that solve real-world problems and give meaning to raw data.
                While I'm still growing in DSA, I hold a solid foundation and keep sharpening my skills — because problem-solving is a mindset, not just a metric.
                For me, it’s not just about code — it’s about clarity, logic, and bringing data to life.
              </p>

              {/* Sticky Note Effect */}
              <motion.div
                className="bg-[#2C2200] p-4 rounded-lg transform rotate-2 shadow-lg"
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm font-medium text-[#FFFDD0]">
                  💡 "Without data, you are just another person with an opinion."
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Icons */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Brain, title: "Analytical Thinking", desc: "Breaking down complex problems into actionable insights" },
              { icon: Heart, title: "Passionate Learner", desc: "Always curious about new tools and techniques" },
              { icon: Target, title: "Goal-Oriented", desc: "Focused on delivering impactful results" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-xl hover-glow cursor-pointer"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-[#FFD700] to-[#1E3A8A] rounded-full">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#F5F5F5]">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Fun Quote */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass p-6 rounded-2xl neon-glow-pink">
            <p className="text-lg text-[#F5F5F5] font-medium">
              🎯 Current Mission: <span className="gradient-text">Making data beautiful and accessible</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
