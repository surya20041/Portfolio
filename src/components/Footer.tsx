import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
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
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-50 border-t border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo/Name */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-bold text-2xl font-mono"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Sureswar Reddy Dronadula
            </span>
          </motion.button>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-full ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700' 
                    : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                } transition-all duration-300 shadow-lg hover:shadow-xl`}
                aria-label={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {['About', 'Experience', 'Projects', 'Publications', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.querySelector(`#${item.toLowerCase()}`);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`${
                  darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                } transition-colors duration-200 font-medium`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className={`w-full h-px ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full text-sm">
            <p className={`flex items-center space-x-1 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <span>© 2025 Sureswar Reddy Dronadula. Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and lots of coffee.</span>
            </p>
            <p className={`mt-2 sm:mt-0 ${
              darkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Back to top"
          >
            <svg
              className="w-5 h-5 transform rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;