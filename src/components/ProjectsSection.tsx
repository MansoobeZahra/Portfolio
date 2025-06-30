import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Cloud, TrendingUp, MapPin, ShoppingCart } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Forecastify",
      subtitle: "Predictive Weather Dashboard",
      description: "Advanced weather prediction system using machine learning algorithms to forecast weather patterns with 95% accuracy.",
      fullDescription: "Forecastify is a comprehensive weather prediction platform that leverages machine learning algorithms and historical weather data to provide accurate forecasts. The system includes real-time data visualization, interactive maps, and predictive analytics for various weather parameters.",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      tech: ["Python", "TensorFlow", "React", "D3.js"],
      features: ["Real-time data processing", "Interactive visualizations", "95% accuracy rate", "Mobile responsive"],
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "project 2",
      subtitle: "",
      description: "",
      fullDescription: "",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      tech: ["", "", "", ""],
      features: ["", "", "", ""],
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Project 3",
      subtitle: "Location Intelligence Platform",
      description: "",
      fullDescription: "",
      icon: MapPin,
      color: "from-purple-500 to-pink-500",
      tech: ["", "", "", ""],
      features: ["", "", "", ""],
      image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Project 4",
      subtitle: "",
      description: "",
      fullDescription: "",
      icon: ShoppingCart,
      color: "from-orange-500 to-red-500",
      tech: ["","", "", ""],
      features: ["", "", "", ""],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Project 5",
      subtitle: "",
      description: "",
      fullDescription: "",
      icon: ShoppingCart,
      color: "from-orange-500 to-red-500",
      tech: ["","", "", ""],
      features: ["", "", "", ""],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Project 6",
      subtitle: "",
      description: "",
      fullDescription: "",
      icon: ShoppingCart,
      color: "from-orange-500 to-red-500",
      tech: ["","", "", ""],
      features: ["", "", "", ""],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-400">
            Bringing data to life through innovation 🚀
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="flip-card h-80"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flip-card-inner">
                {/* Front of Card */}
                <div className="flip-card-front glass neon-glow p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${project.color}`}>
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-[#F5F5F5]">{project.title}</h3>
                        <p className="text-[#b3940c] text-sm">{project.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-32 object-cover rounded-lg opacity-80"
                    />
                  </div>
                </div>

                {/* Back of Card */}
                <div className="flip-card-back glass neon-glow-pink p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#F5F5F5] mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="bg-[#4896b5] text-[#0D1117] px-3 py-1 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-sm font-semibold text-[#4896b5] mb-2">Key Features:</h4>
                    <ul className="text-gray-300 text-xs space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex space-x-3 mt-4">
                    <button
                      onClick={() => setSelectedProject(project.id)}
                      className="flex-1 bg-[#b3940c] text-[#0D1117] py-2 px-4 rounded-lg font-medium text-sm hover:bg-[#00E6B8] transition-colors"
                    >
                      View Details
                    </button>
                    <button className="p-2 glass rounded-lg hover:bg-[#b3940c]/20 transition-colors">
                      <ExternalLink className="w-4 h-4 text-[#F5F5F5]" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="glass max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-2xl p-6 neon-glow"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  
                  return (
                    <>
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-3xl font-bold gradient-text mb-2">{project.title}</h3>
                          <p className="text-[#b3940c]">{project.subtitle}</p>
                        </div>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="p-2 hover:bg-[#FF4C60]/20 rounded-full transition-colors"
                        >
                          <X className="w-6 h-6 text-[#F5F5F5]" />
                        </button>
                      </div>
                      
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-lg mb-6"
                      />
                      
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {project.fullDescription}
                      </p>
                      
                      <div className="flex space-x-4">
                        <button className="flex items-center space-x-2 bg-[#b3940c] text-[#0D1117] px-6 py-3 rounded-lg font-medium hover:bg-[#00E6B8] transition-colors">
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </button>
                        <button className="flex items-center space-x-2 glass px-6 py-3 rounded-lg font-medium hover:bg-[#b3940c]/20 transition-colors">
                          <Github className="w-4 h-4" />
                          <span>View Code</span>
                        </button>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fun Easter Egg */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-block text-2xl">
            <motion.span
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎨
            </motion.span>
            <span className="text-gray-400 ml-2">More projects cooking in the lab...</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;