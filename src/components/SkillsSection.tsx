import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, BarChart3, Brain, Lightbulb, Trophy, Target, Zap } from 'lucide-react';
import MetricBox from "./MetricBox";
import DifficultyBar from "./DifficultyBar";


interface DSAStats {
  totalProblems: number;
  easy: number;
  medium: number;
  hard: number;
  contests: number;
  rating: number;
  rank: string;
}

const SkillsSection: React.FC = () => {
  const [dsaStats, setDsaStats] = useState<DSAStats>({
    totalProblems: 0,
    easy: 0,
    medium: 0,
    hard: 0,
    contests: 0,
    rating: 0,
    rank: 'Loading...'
  });

  const [isLoading, setIsLoading] = useState(true);

  // Mock data - replace with actual API call
  useEffect(() => {
    const fetchDSAStats = async () => {
      setIsLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock data - replace with actual Codolio API integration
      setDsaStats({
        totalProblems: 222,
        easy: 89,
        medium: 132,
        hard: 26,
        contests: 3,
        rating: 1023303,
        rank: 'Noob'
      });
      
      setIsLoading(false);
    };

    fetchDSAStats();
  }, []);

  const skills = [
    { name: "Python", level: 90, icon: Code, color: "#5b853d" },
    { name: "Java", level: 85, icon: Database, color: "#00758f" },
    { name: "C/C++", level: 80, icon: BarChart3, color: "#e97627" },
    { name: "Machine Learning", level: 75, icon: Brain, color: "#ff6b6b" },
    { name: "Data Visualization", level: 88, icon: BarChart3, color: "#4ecdc4" },
    { name: "Statistical Analysis", level: 82, icon: Lightbulb, color: "#45b7d1" },
  ];

  const softSkills = [
    { name: <span style={{ color: "#45b7d1" }}>Problem Solving</span>, description: "Breaking complex challenges into manageable solutions" },
    { name: <span style={{ color: "#45b7d1" }}>Communication</span>, description: "Translating technical insights into business language" },
    { name: <span style={{ color: "#45b7d1" }}>Team Collaboration</span>, description: "Working effectively with cross-functional teams" },
    { name: <span style={{ color: "#45b7d1" }}>Critical Thinking</span>, description: "Analyzing data with a questioning mindset" },
  ];

  const timeline = [
    {
      client: (
        <span style={{ color: "#b3940c" }}>
          March 2025 – Exploratory Data Analysis & Visualization
        </span>
      ),
      event: (
        <span style={{ color: "#fff" }}>
          Mansoob produced stunning visual dashboards from a chaotic Excel dump. Her Python-based EDA and Streamlit dashboard helped us identify key business trends instantly. Highly professional and very responsive. — Fatima R., Business Analyst (UAE)
        </span>
      ),
      color: "#b3940c"
    },
    {
      client: (
        <span style={{ color: "#b3940c" }}>
          May 2025 - AI-Powered Recommendation System
        </span>
      ),
      event: (
        <span style={{ color: "#fff" }}>
          “She built a smart, scalable recommendation engine for our e-commerce site. Seamless integration, solid API documentation, and even a short Loom walkthrough video. Felt like working with a Silicon Valley engineer. — Leon K., Startup Founder (Netherlands)
        </span>
      ),
      color: "#b3940c"
    },
    {
      client: (
        <span style={{ color: "#b3940c" }}>
          June 2025 – Data Cleaning + Feature Engineering
        </span>
      ),
      event: (
        <span style={{ color: "#fff" }}>
          “I’ve worked with many freelancers, but Mansoob’s ability to clean, impute, and engineer features from raw survey data was next level. Saved us hours of manual work and improved model accuracy drastically. — Ritika M., Data Ops Manager (India)
        </span>
      ),
      color: "#b3940c"
    },
    {
      client: (
        <span style={{ color: "#b3940c" }}>
          July 2025 – Data Science Capstone Collaboration
        </span>
      ),
      event: (
        <span style={{ color: "#fff" }}>
          We collaborated on a student engagement prediction project. Mansoob was thorough in her statistical analysis, used clean code practices, and gave great peer feedback. Super collaborative and detail-oriented. — Zainab A., EdTech Researcher (Pakistan)
        </span>
      ),
      color: "#b3940c"
    }
  ];
  // Add more skills and timeline events as needed
  // Example skills and timeline data

  return (
    <section id="skills" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400">
            Constantly evolving, always learning 📈
          </p>
        </motion.div>

        {/* DSA Skills Section */}
        {/* DSA Skills Section */}
<div className="mb-20">
  <motion.h3
    className="text-3xl font-bold text-[#F5F5F5] mb-8 text-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <span className="gradient-text">DSA & Competitive Programming</span>
    <motion.span
      className="inline-block ml-2 text-2xl"
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      🏆
    </motion.span>
  </motion.h3>

  <motion.div
    className="glass p-8 rounded-2xl neon-glow mb-8"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {/* Profile & Buttons */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-gradient-to-r from-[#3d6f85] to-[#b3940c] rounded-full">
          <Trophy className="w-8 h-8 text-white" />
        </div>
        <div>
          <h4 className="text-2xl font-bold text-[#F5F5F5]">Profiles</h4>
          <p className="text-[#3d6f85]">@MansoobeZahra</p>
        </div>
      </div>
      <div className="flex gap-4">
        <motion.a
          href="https://leetcode.com/u/Mansoob-e-Zahra/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#3d6f85] text-[#0D1117] px-4 py-2 rounded-lg font-medium hover:bg-[#00E6B8] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View LeetCode
        </motion.a>
        <motion.a
          href="https://codolio.com/profile/Mansoob"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#3d6f85] text-[#0D1117] px-4 py-2 rounded-lg font-medium hover:bg-[#00E6B8] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Codolio
        </motion.a>
      </div>
    </div>

    {/* Metrics Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {/* Total Problems */}
      <MetricBox
        icon={<Target className="w-8 h-8 text-white" />}
        value={dsaStats.totalProblems}
        label="Total Problems"
        gradient="from-green-500 to-emerald-500"
      />

      {/* Contests */}
      <MetricBox
        icon={<Trophy className="w-8 h-8 text-white" />}
        value={dsaStats.contests}
        label="Contests"
        gradient="from-[#3d6f85] to-blue-500"
      />

      {/* Rating */}
      <MetricBox
        icon={<Zap className="w-8 h-8 text-white" />}
        value={dsaStats.rating}
        label="Current Rating"
        gradient="from-[#b3940c] to-purple-500"
      />

      {/* Rank */}
      <MetricBox
        icon={<span className="text-2xl">🎯</span>}
        value={dsaStats.rank}
        label="Rank"
        gradient="from-yellow-500 to-orange-500"
      />
    </div>

    {/* Problem Difficulty Breakdown */}
    <div className="mt-8 pt-6 border-t border-gray-700">
      <h5 className="text-lg font-semibold text-[#F5F5F5] mb-4 text-center">
        Problem Difficulty Breakdown
      </h5>
            <div className="grid grid-cols-3 gap-4">
        <DifficultyBar label="Easy" value={dsaStats.easy} color="#4ade80" total={dsaStats.totalProblems} />   {/* green-400 */}
        <DifficultyBar label="Medium" value={dsaStats.medium} color="#facc15" total={dsaStats.totalProblems} /> {/* yellow-400 */}
        <DifficultyBar label="Hard" value={dsaStats.hard} color="#f87171" total={dsaStats.totalProblems} />   {/* red-400 */}
      </div>

    </div>

    {/* Live Indicator */}
    <motion.div
      className="flex items-center justify-center mt-6 text-sm text-gray-400"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="w-2 h-2 bg-[#3d6f85] rounded-full mr-2"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      Live data from Codolio & LeetCode
    </motion.div>
  </motion.div>
</div>

        {/* Technical Skills */}
        <div className="mb-20">
          <motion.h3
            className="text-3xl font-bold text-[#F5F5F5] mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="glass p-6 rounded-xl hover-glow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center mb-4">
                  <div 
                    className="p-3 rounded-full"
                    style={{ backgroundColor: `${skill.color}20`, border: `2px solid ${skill.color}` }}
                  >
                    <skill.icon className="w-6 h-6" style={{ color: skill.color }} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-[#F5F5F5]">{skill.name}</h4>
                    <p className="text-sm text-gray-400">{skill.level}% Proficiency</p>
                  </div>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-20">
          <motion.h3
            className="text-3xl font-bold text-[#F5F5F5] mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Soft Skills
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={typeof skill.name === 'string' ? skill.name : skill.description}
                className="glass p-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_#b8860baa] hover:ring-1 hover:ring-[#b8860b]/40 hover:scale-[1.02]"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl font-semibold text-[#F5F5F5] mb-2">{skill.name}</h4>
                <p className="text-gray-300">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Client Reviews */}
        <div>
          <motion.h3
            className="text-3xl font-bold text-[#F5F5F5] mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Client Reviews
          </motion.h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#3d6f85] to-[#b3940c] rounded-full" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="glass p-6 rounded-xl neon-glow inline-block">
                      <h4 className="text-xl font-bold text-[#F5F5F5] mb-2">{item.client}</h4>
                      <p className="text-gray-300">{item.event}</p>
                    </div>
                  </div>
                  
                  <div 
                    className="w-6 h-6 rounded-full border-4 border-[#0D1117] z-10"
                    style={{ backgroundColor: item.color }}
                  />
                  
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Motivational Quote */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass p-8 rounded-2xl neon-glow inline-block">
            <p className="text-2xl font-medium gradient-text mb-4">
              "The future belongs to those who believe in the beauty of their dreams"
            </p>
            <p className="text-gray-400">
              - Eleanor Roosevelt 🧠✨
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;