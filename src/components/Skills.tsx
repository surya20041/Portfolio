import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cloud, Database, Code, Wrench, Monitor, Trophy } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState('All');

  const skillCategories = [
    {
      name: 'Cloud & Orchestration',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Azure Data Factory', level: 90 },
        { name: 'Azure Synapse', level: 85 },
        { name: 'Databricks', level: 88 },
        { name: 'Docker', level: 82 },
        { name: 'Kubernetes', level: 78 }
      ]
    },
    {
      name: 'Big Data & ETL',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'PySpark', level: 92 },
        { name: 'Apache Kafka', level: 85 },
        { name: 'Snowflake', level: 80 },
        { name: 'SQL Server', level: 90 },
        { name: 'MongoDB', level: 75 }
      ]
    },
    {
      name: 'Programming',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Java', level: 88 },
        { name: 'C/C++', level: 85 },
        { name: 'JavaScript', level: 82 },
        { name: 'React.js', level: 80 },
        { name: 'SQL', level: 90 }
      ]
    },
    {
      name: 'AI/ML & Tools',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'TensorFlow', level: 88 },
        { name: 'PyTorch', level: 85 },
        { name: 'Scikit-learn', level: 90 },
        { name: 'OpenCV', level: 87 },
        { name: 'YOLOv8', level: 85 },
        { name: 'NumPy', level: 92 },
        { name: 'Pandas', level: 95 }
      ]
    },
    {
      name: 'Development Tools',
      icon: Monitor,
      color: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Power BI', level: 88 },
        { name: 'Midjourney', level: 85 },
        { name: 'Spring Boot', level: 82 },
        { name: 'MLflow', level: 78 }
      ]
    }
  ];

  const hackathons = [
    {
      name: 'WomenTechies GDSC',
      date: 'April 2023',
      category: 'Computer Vision',
      description: 'Developed an AI-powered meal analysis application using computer vision techniques for nutritional assessment.',
      achievement: 'Winner',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'React.js']
    },
    {
      name: 'Smart India Hackathon',
      date: 'October 2023',
      category: 'Computer Vision',
      description: 'Created a Dynamic Traffic Management System using YOLOv8 for real-time traffic optimization and congestion management.',
      achievement: 'Finalist',
      technologies: ['YOLOv8', 'Python', 'OpenCV', 'FastAPI']
    }
  ];

  const categories = ['All', ...skillCategories.map(cat => cat.name)];

  const filteredSkills = activeCategory === 'All' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.name === activeCategory);

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
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
            Skills & Expertise
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

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredSkills.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + categoryIndex * 0.2 }}
              className={`p-8 rounded-xl ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              } shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className={`text-xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.name}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-medium ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.8 + skillIndex * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hackathons Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className={`text-2xl font-bold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Hackathons & Competitions
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                } shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Trophy className="text-yellow-500" size={24} />
                  <div>
                    <h4 className={`font-bold text-lg ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {hackathon.name}
                    </h4>
                    <div className="flex items-center space-x-4">
                      <span className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {hackathon.date}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        hackathon.achievement === 'Winner'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {hackathon.achievement}
                      </span>
                    </div>
                  </div>
                </div>

                <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium mb-3">
                  {hackathon.category}
                </span>

                <p className={`mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {hackathon.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {hackathon.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs rounded-full ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;