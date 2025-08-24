import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Calendar, MapPin, TrendingUp } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'Cognizant',
      position: 'Azure Developer & Data Engineer',
      duration: 'April 2025 - Present',
      location: 'Coimbatore, India',
      achievements: [
        'Leveraged data warehousing and PySpark for large-scale data processing',
        'Built end-to-end data pipelines improving processing efficiency by 30%',
        'Implemented Azure Data Factory workflows for automated data integration',
        'Optimized Databricks clusters reducing computational costs by 25%'
      ],
      skills: ['Azure', 'PySpark', 'Data Factory', 'Databricks', 'SQL'],
      impact: '30% efficiency improvement'
    }
  ];

  const internships = [
    {
      company: 'Techrev Solutions',
      position: 'Web Development Intern',
      duration: 'May - July 2024',
      location: 'Hyderabad, India',
      description: 'Enhanced web application features using React.js and Spring Boot, focusing on user experience and performance optimization.',
      skills: ['React.js', 'Spring Boot', 'JavaScript', 'REST APIs']
    },
    {
      company: 'SheValues',
      position: 'Data Analyst & Python Developer',
      duration: 'April - July 2023',
      location: 'Bangalore, India',
      description: 'Developed web scraping solutions and created interactive data visualizations for business intelligence.',
      skills: ['Python', 'Web Scraping', 'Data Visualization', 'Pandas']
    },
    {
      company: 'SwipeUp Productions',
      position: 'Midjourney Prompt Engineer',
      duration: 'January - March 2025',
      location: 'Remote',
      description: 'Automated content generation pipelines using NLP techniques and Midjourney API integration.',
      skills: ['NLP', 'Midjourney', 'Python', 'API Integration']
    }
  ];

  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
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
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        {/* Full-time Experience */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Professional Experience
          </h3>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`p-8 rounded-xl ${
                darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-200'
              } shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Building className="text-blue-500" size={24} />
                    <h4 className={`text-2xl font-bold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {exp.company}
                    </h4>
                  </div>
                  <h5 className={`text-xl font-semibold mb-3 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {exp.position}
                  </h5>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                        {exp.duration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                  <TrendingUp size={16} />
                  <span className="font-semibold">{exp.impact}</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h6 className={`font-semibold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Key Achievements
                  </h6>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className={`flex items-start space-x-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h6 className={`font-semibold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Technologies Used
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Internships */}
        <div>
          <h3 className={`text-2xl font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Internships
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
                } shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Building className="text-purple-500" size={20} />
                  <h4 className={`text-lg font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {internship.company}
                  </h4>
                </div>
                <h5 className={`font-semibold mb-2 ${
                  darkMode ? 'text-purple-400' : 'text-purple-600'
                }`}>
                  {internship.position}
                </h5>
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar size={14} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {internship.duration}
                  </span>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <MapPin size={14} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {internship.location}
                  </span>
                </div>
                <p className={`text-sm mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {internship.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {internship.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs rounded-full ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;