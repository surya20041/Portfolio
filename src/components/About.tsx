import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Calendar } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'B.Tech Computer Science & Engineering',
      institute: 'Vellore Institute of Technology (VIT) Vellore',
      score: '8.75 CGPA',
      year: '2021-2025',
      icon: GraduationCap
    },
    {
      degree: 'Senior Secondary',
      institute: 'Narayana Junior College',
      score: '92.5%',
      year: '2021',
      icon: Award
    },
    {
      degree: 'School',
      institute: 'Narayana Olympiad School',
      score: '10.0 GPA',
      year: '2019',
      icon: Calendar
    }
  ];

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Passionate AI & Data Engineer
            </h3>
            <p className={`text-lg leading-relaxed mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I'm passionate about AI and data engineering, with hands-on experience in Azure, PySpark, 
              computer vision (YOLOv8), and blockchain-based systems. Currently working at Cognizant as 
              an Azure Developer & Data Engineer, I focus on building scalable solutions that drive 
              business value.
            </p>
            <p className={`text-lg leading-relaxed mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              My interests span across Intrusion Detection Systems, biometric authentication, and 
              traffic optimization. I believe in leveraging cutting-edge technology to solve 
              real-world problems and create meaningful impact.
            </p>
            <div className="flex flex-wrap gap-3">
              {['AI & Machine Learning', 'Data Engineering', 'Computer Vision', 'Blockchain', 'Cloud Computing'].map((interest, index) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className={`p-6 rounded-xl ${
                    darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                  } shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                      <edu.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-bold text-lg mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {edu.degree}
                      </h4>
                      <p className={`text-sm mb-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {edu.institute}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className={`font-semibold ${
                          darkMode ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                          {edu.score}
                        </span>
                        <span className={`text-sm ${
                          darkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {edu.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;