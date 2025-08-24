import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/surya20041',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/sureswar-reddy-dronadula-9994281a0/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:surya.work2004@gmail.com',
      label: 'Email'
    },
    {
      icon: Phone,
      href: 'tel:+919441512002',
      label: 'Phone'
    }
  ];

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800">
        <div className="absolute inset-0 bg-black/20" />
        {/* Particle Animation */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl sm:text-5xl font-bold">
              SR
            </div>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4"
          style={{ fontFamily: 'Orbitron, monospace' }}
        >
          Sureswar Reddy Dronadula
        </motion.h1>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl sm:text-2xl lg:text-3xl font-light mb-6 text-blue-200"
        >
          Azure Developer | AI Enthusiast | Data Engineer
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 text-gray-200 leading-relaxed"
        >
          Building scalable AI solutions with computer vision, blockchain, and big data. 
          B.Tech CSE from VIT Vellore (CGPA 8.75)
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
              aria-label={link.label}
            >
              <link.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Down Arrow */}
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={scrollToAbout}
          className="animate-bounce"
        >
          <ChevronDown size={32} className="mx-auto text-white/70 hover:text-white transition-colors duration-300" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;