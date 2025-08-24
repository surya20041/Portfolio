import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Eye, Calendar, Code } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Lane Logic',
      date: 'April 2025',
      category: 'Computer Vision',
      description: 'Advanced traffic detection system using YOLOv8 for real-time vehicle detection and LLMs for intelligent traffic analysis and reporting.',
      longDescription: 'Lane Logic is a comprehensive traffic management solution that leverages state-of-the-art computer vision techniques. The system uses YOLOv8 for accurate vehicle detection and tracking, combined with Large Language Models for generating intelligent traffic summaries and insights. Features include real-time traffic flow analysis, congestion detection, and automated reporting.',
      technologies: ['Python', 'YOLOv8', 'OpenCV', 'TensorFlow', 'LLMs', 'FastAPI'],
      github: 'https://github.com/surya20041/lane-logic',
      demo: '#',
      image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Real-time vehicle detection', 'Traffic flow analysis', 'Automated reporting', 'LLM-powered insights']
    },
    {
      title: 'Authentication & User Management',
      date: 'June 2024',
      category: 'Web Development',
      description: 'Secure authentication system with JWT tokens and Role-Based Access Control (RBAC) using Spring Security framework.',
      longDescription: 'A robust authentication and authorization system built with Spring Boot and Spring Security. Implements JWT-based authentication, role-based access control, and comprehensive user management features. The system provides secure endpoints, password encryption, and session management.',
      technologies: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'React.js'],
      github: 'https://github.com/surya20041/auth-system',
      demo: '#',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['JWT Authentication', 'Role-based access control', 'Password encryption', 'Session management']
    },
    {
      title: 'Disease Data Analysis',
      date: 'March 2023',
      category: 'Data Analytics',
      description: 'Interactive Power BI dashboards for comprehensive disease data analysis and visualization with real-time insights.',
      longDescription: 'Comprehensive data analysis project focusing on disease patterns and trends. Built interactive dashboards using Power BI to visualize complex medical data, enabling healthcare professionals to make data-driven decisions. Includes predictive analytics and trend analysis.',
      technologies: ['Power BI', 'Python', 'Pandas', 'SQL Server', 'DAX', 'Excel'],
      github: 'https://github.com/surya20041/disease-analysis',
      demo: '#',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Interactive dashboards', 'Predictive analytics', 'Trend analysis', 'Real-time updates']
    },
    {
      title: 'Diabetes Prediction System',
      date: 'February 2024',
      category: 'AI/ML',
      description: 'Machine learning model for early diabetes prediction using patient health metrics and advanced algorithms.',
      longDescription: 'An AI-powered healthcare solution that predicts diabetes risk using machine learning algorithms. The system analyzes various health parameters and provides risk assessment with high accuracy. Includes data preprocessing, feature engineering, and model optimization.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask', 'Matplotlib'],
      github: 'https://github.com/surya20041/Diabetes-Prediction-System',
      demo: '#',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['ML-based prediction', 'Risk assessment', 'Data visualization', 'Web interface']
    },
    {
      title: 'Mental Fitness Tracker',
      date: 'January 2024',
      category: 'Data Analysis',
      description: 'Comprehensive mental health tracking application with data analysis and personalized insights.',
      longDescription: 'A mental health monitoring application that tracks various wellness metrics and provides personalized insights. Uses data analysis techniques to identify patterns and trends in mental health data, offering recommendations for improved well-being.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Streamlit', 'SQLite'],
      github: 'https://github.com/surya20041/Mental-Fitness-Tracker',
      demo: '#',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Mood tracking', 'Data visualization', 'Trend analysis', 'Personalized insights']
    },
    {
      title: 'Data Scraper',
      date: 'December 2023',
      category: 'Web Scraping',
      description: 'Advanced web scraping tool for automated data extraction from multiple sources with data cleaning capabilities.',
      longDescription: 'A powerful web scraping framework that automates data extraction from various websites. Features include intelligent parsing, data cleaning, rate limiting, and export capabilities. Designed for scalability and reliability.',
      technologies: ['Python', 'BeautifulSoup', 'Scrapy', 'Selenium', 'Pandas', 'MongoDB'],
      github: 'https://github.com/surya20041/Data-Scraper',
      demo: '#',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Multi-source scraping', 'Data cleaning', 'Rate limiting', 'Export capabilities']
    }
  ];

  const categories = ['All', 'Computer Vision', 'Web Development', 'Data Analytics', 'AI/ML', 'Data Analysis', 'Web Scraping'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className={`group relative overflow-hidden rounded-xl ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              } shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                  >
                    <Github size={16} className="text-white" />
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(index)}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                  >
                    <Eye size={16} className="text-white" />
                  </motion.button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>{project.date}</span>
                  </div>
                </div>

                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>

                <p className={`text-sm mb-4 line-clamp-3 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs rounded-full ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}>
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <button
                    onClick={() => setSelectedProject(index)}
                    className="flex items-center space-x-2 text-sm font-medium text-purple-500 hover:text-purple-600 transition-colors duration-200"
                  >
                    <Eye size={16} />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={filteredProjects[selectedProject].image}
                  alt={filteredProjects[selectedProject].title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                >
                  ×
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-3xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {filteredProjects[selectedProject].title}
                  </h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium">
                    {filteredProjects[selectedProject].category}
                  </span>
                </div>

                <p className={`text-lg mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {filteredProjects[selectedProject].longDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className={`font-semibold mb-3 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {filteredProjects[selectedProject].features.map((feature, i) => (
                        <li key={i} className={`flex items-start space-x-2 ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-3 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {filteredProjects[selectedProject].technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={filteredProjects[selectedProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                  <a
                    href={filteredProjects[selectedProject].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;