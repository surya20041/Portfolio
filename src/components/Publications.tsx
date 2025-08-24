import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, ExternalLink, Calendar, Award, Users } from 'lucide-react';

interface PublicationsProps {
  darkMode: boolean;
}

const Publications: React.FC<PublicationsProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const publications = [
    {
      title: 'An Innovative Approach and Evaluation of Contemporary Intrusion Detection Systems',
      date: 'October 2024',
      type: 'Research Paper',
      description: 'A comprehensive study on modern intrusion detection systems using CNN-LSTM-Attention architecture, achieving 99.71% accuracy on the CIC-IDS2017 dataset.',
      details: 'This research presents a novel hybrid approach combining Convolutional Neural Networks, Long Short-Term Memory networks, and Attention mechanisms for enhanced intrusion detection. The proposed system demonstrates superior performance in detecting various types of network attacks.',
      accuracy: '99.71%',
      dataset: 'CIC-IDS2017',
      links: [
        { name: 'Taylor & Francis', url: '#' },
        { name: 'ResearchGate', url: '#' },
        { name: 'Google Scholar', url: '#' }
      ],
      keywords: ['Intrusion Detection', 'CNN-LSTM', 'Attention Mechanism', 'Cybersecurity', 'Machine Learning'],
      impact: 'High accuracy in network threat detection'
    },
    {
      title: 'A Novel Blockchain Based Biometric Authentication Mechanism',
      date: 'February 2025',
      type: 'Research Paper',
      description: 'Innovative biometric authentication system leveraging blockchain technology and fuzzy vault cryptography with 2-3 second response time.',
      details: 'This paper introduces a secure biometric authentication framework that combines blockchain technology with fuzzy vault cryptography to ensure privacy-preserving authentication. The system provides fast response times while maintaining high security standards.',
      responseTime: '2-3 seconds',
      technology: 'Fuzzy Vault Cryptography',
      links: [
        { name: 'Journal Publication', url: '#' }
      ],
      keywords: ['Blockchain', 'Biometric Authentication', 'Fuzzy Vault', 'Cryptography', 'Privacy'],
      impact: 'Fast and secure biometric authentication'
    }
  ];

  const certifications = [
    {
      name: 'GRE ETS',
      issuer: 'Educational Testing Service',
      date: '2024',
      type: 'Standardized Test'
    },
    {
      name: 'Forest Management',
      issuer: 'NPTEL',
      date: '2023',
      type: 'Online Course'
    }
  ];

  const positions = [
    {
      role: 'Core Committee Member',
      organization: 'Mozilla Firefox Club',
      duration: 'April 2023 - 2025',
      description: 'Active contributor to open-source initiatives and web technology advocacy.'
    },
    {
      role: 'Core Committee Member',
      organization: 'IEEE-RAS (Robotics and Automation Society)',
      duration: 'April 2023 - 2025',
      description: 'Organized technical workshops and robotics competitions.'
    },
    {
      role: 'Core Committee Member',
      organization: 'AI & ML Club at VIT',
      duration: 'April 2023 - 2025',
      description: 'Led AI/ML workshops and mentored students in machine learning projects.'
    }
  ];

  return (
    <section id="publications" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
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
            Publications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        {/* Publications Timeline */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Research Publications
          </h3>
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className={`relative ${
                  darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-200'
                } rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <BookOpen className="text-blue-500" size={24} />
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium">
                        {pub.type}
                      </span>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar size={16} />
                        <span>{pub.date}</span>
                      </div>
                    </div>

                    <h4 className={`text-xl font-bold mb-3 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {pub.title}
                    </h4>

                    <p className={`mb-4 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {pub.description}
                    </p>

                    <p className={`mb-6 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {pub.details}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h5 className={`font-semibold mb-2 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          Key Metrics
                        </h5>
                        <div className="space-y-2">
                          {pub.accuracy && (
                            <div className="flex items-center space-x-2">
                              <Award size={16} className="text-green-500" />
                              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                Accuracy: {pub.accuracy}
                              </span>
                            </div>
                          )}
                          {pub.responseTime && (
                            <div className="flex items-center space-x-2">
                              <Award size={16} className="text-green-500" />
                              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                Response Time: {pub.responseTime}
                              </span>
                            </div>
                          )}
                          <div className="flex items-center space-x-2">
                            <Award size={16} className="text-blue-500" />
                            <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                              Impact: {pub.impact}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 className={`font-semibold mb-2 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          Keywords
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {pub.keywords.map((keyword, i) => (
                            <span
                              key={i}
                              className={`px-2 py-1 text-xs rounded-full ${
                                darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                              }`}
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {pub.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 font-medium transition-colors duration-200"
                        >
                          <ExternalLink size={16} />
                          <span>{link.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications and Positions */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
                  } shadow-md hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <Award className="text-yellow-500" size={20} />
                    <h4 className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {cert.name}
                    </h4>
                  </div>
                  <p className={`text-sm mb-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {cert.issuer}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className={`text-xs ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {cert.type}
                    </span>
                    <span className={`text-xs ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {cert.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Positions of Responsibility */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Positions of Responsibility
            </h3>
            <div className="space-y-4">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
                  } shadow-md hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <Users className="text-purple-500" size={20} />
                    <h4 className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {position.role}
                    </h4>
                  </div>
                  <p className={`text-sm mb-2 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {position.organization}
                  </p>
                  <p className={`text-sm mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {position.description}
                  </p>
                  <span className={`text-xs ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {position.duration}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Publications;