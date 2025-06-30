import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, MessageSquare } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
       const response = await fetch('https://formspree.io/f/mzzgjlgz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        alert("Thanks for reaching out! I'll get back to you soon 🚀");
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please check your internet and try again.');
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/in/mansoob-e-zahra-3126ba257/', label: 'LinkedIn', color: '#0077b5' },
    { icon: Github, url: 'https://github.com/MansoobeZahra', label: 'GitHub', color: '#333' },
    { icon: Twitter, url: 'https://x.com/MansoobeZahra', label: 'Twitter', color: '#1da1f2' },
    { icon: MessageSquare, url: '#', label: 'Discord', color: '#7289da' },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-400">Ready to turn data into magic? Let's chat! ✨</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass p-8 rounded-2xl neon-glow">
              <h3 className="text-2xl font-bold text-[#F5F5F5] mb-6">Get in Touch</h3>

              <motion.div
                className="absolute top-4 right-4 opacity-20"
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Phone size={40} className="text-[#ffd700]" />
              </motion.div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[#ffd700]/20 rounded-full">
                    <Mail className="w-6 h-6 text-[#ffd700]" />
                  </div>
                  <div>
                    <p className="text-[#F5F5F5] font-medium">Email</p>
                    <p className="text-gray-400">mansoobezehra@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[#13aced]/20 rounded-full">
                    <Phone className="w-6 h-6 text-[#13aced]" />
                  </div>
                  <div>
                    <p className="text-[#F5F5F5] font-medium">Phone</p>
                    <p className="text-gray-400">+92 3155064315</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[#ffd700]/20 rounded-full">
                    <MapPin className="w-6 h-6 text-[#ffd700]" />
                  </div>
                  <div>
                    <p className="text-[#F5F5F5] font-medium">Location</p>
                    <p className="text-gray-400">PIEAS, Islamabad</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-[#F5F5F5] font-medium mb-4">Follow me on social media</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      className="p-3 glass rounded-full hover-glow transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                      target="_blank"
                    >
                      <social.icon className="w-5 h-5 text-[#F5F5F5]" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                className="mt-8 p-4 bg-[#ffd700]/10 rounded-lg border border-[#ffd700]/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2">
                  <motion.div
                    className="w-3 h-3 bg-[#ffd700] rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <p className="text-[#ffd700] font-medium">Currently available for new opportunities!</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl neon-glow-pink">
              <h3 className="text-2xl font-bold text-[#F5F5F5] mb-6">Send me a message</h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#F5F5F5] font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 glass rounded-lg border border-[#ffd700]/30 text-[#F5F5F5] placeholder-gray-400 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#F5F5F5] font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 glass rounded-lg border border-[#ffd700]/30 text-[#F5F5F5] placeholder-gray-400 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#F5F5F5] font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-3 glass rounded-lg border border-[#ffd700]/30 text-[#F5F5F5] placeholder-gray-400 focus:outline-none focus:border-[#ffd700] focus:ring-2 focus:ring-[#ffd700]/20 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#ffd700] to-[#13aced] text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-16 pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-4">© 2025 Mansoobe Zahra. Wish me Luck 🍀</p>
          <div className="flex justify-center space-x-4 text-sm">
            <motion.span className="text-[#ffd700] cursor-pointer hover:text-[#00E6B8] transition-colors" whileHover={{ scale: 1.05 }}>
              🎯 Always ready for new challenges
            </motion.span>
            <span className="text-gray-600">•</span>
            <motion.span className="text-[#13aced] cursor-pointer hover:text-[#ffd700] transition-colors" whileHover={{ scale: 1.05 }}>
              🚀 Let's build something amazing together
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;