import React from 'react';
import { MapPin, Calendar, Building, Trophy, Users, Lightbulb } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'CoinWa',
      position: 'Software Development Intern',
      location: 'Remote',
      duration: 'Jan 2025 - Apr 2025',
      type: 'Internship',
      description: 'Developed a financial literacy application using Flutter and Node.js, implementing user authentication, progress tracking, and interactive learning modules.',
      achievements: [
        'Built full-stack mobile application serving users',
        'Implemented secure authentication and data synchronization',
        'Designed gamified learning experience increasing engagement by 40%',
        'Collaborated with cross-functional team using Agile methodology'
      ],
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'REST APIs', 'Git'],
      icon: Building,
    },
    {
      company: 'Western University',
      position: 'Software Engineering Intern',
      location: 'London, ON',
      duration: 'Feb 2023 - Jun 2024',
      type: 'Internship',
      description: 'Optimized course assignments for dean and teachers using Java algorithms, reducing scheduling conflicts and improving system efficiency.',
      achievements: [
        'Developed optimization algorithms reducing conflicts by 80%',
        'Mentored 50+ students in Java programming concepts',
        'Created automated testing frameworks for code evaluation',
        'Improved assignment distribution efficiency by 60%'
      ],
      technologies: ['Java', 'Algorithm Design', 'Data Structures', 'Testing'],
      icon: Users,
    },
    // {
    //   company: 'Electrium Mobility Team',
    //   position: 'Firmware & CAD Developer',
    //   location: 'University of Waterloo',
    //   duration: 'Sep 2022 - Present',
    //   type: 'Extracurricular',
    //   description: 'Develop firmware and CAD models for electric vehicle and robotics projects, focusing on embedded systems and mechanical design.',
    //   achievements: [
    //     'Designed PCB layouts for motor control systems',
    //     'Implemented embedded control algorithms for vehicle systems',
    //     'Created 3D models and assemblies for electric vehicle components',
    //     'Led technical workshops for 20+ team members'
    //   ],
    //   technologies: ['Arduino', 'C++', 'SolidWorks', 'PCB Design', 'Embedded Systems'],
    //   icon: Lightbulb,
    // },
    {
      company: 'Biomechatronics Club',
      position: 'Design Team Member',
      location: 'University of Waterloo',
      duration: 'Jan 2024 - Apr 2024',
      type: 'Extracurricular',
      description: 'Contribute to interdisciplinary projects combining biology, mechanics, and electronics for innovative healthcare solutions.',
      achievements: [
        'Developed prototype medical devices for accessibility',
        'Collaborated on research projects with engineering faculty',
        'Presented project findings at undergraduate research symposium',
        'Mentored junior students in technical design principles'
      ],
      technologies: ['Bioengineering', 'Sensor Integration', 'MATLAB', 'Prototyping'],
      icon: Trophy,
    },
    {
      company: 'WSP',
      position: 'GIS Technology Intern',
      location: 'Thunder Bay, ON',
      duration: 'May 2024 - Aug 2024',
      type: 'Internship',
      description: 'Applied GIS technology for archaeological fieldwork, managing spatial data analysis and creating detailed mapping solutions for heritage sites.',
      achievements: [
        'Processed and analyzed spatial data for 10+ archaeological sites',
        'Created detailed mapping solutions improving field efficiency by 30%',
        'Developed automated workflows reducing manual data entry by 50%',
        'Collaborated with archaeologists to document heritage findings'
      ],
      technologies: ['GIS Software', 'ArcGIS', 'Python', 'Data Analysis', 'GPS'],
      icon: MapPin,
    },
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      'Internship': 'bg-blue-100 text-blue-800',
      'Part-time': 'bg-green-100 text-green-800',
      'Extracurricular': 'bg-purple-100 text-purple-800',
    };
    return colors[type as keyof typeof colors] || 'bg-slate-100 text-slate-800';
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Hands-on experience in software development, engineering optimization, and technical leadership 
            across industry internships and academic projects.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex items-start mb-4 lg:mb-0">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <exp.icon size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {exp.position}
                      </h3>
                      <div className="text-lg font-semibold text-blue-600 mb-2">
                        {exp.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {exp.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(exp.type)}`}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="text-slate-700 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Key Achievements */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                      <Trophy size={16} className="mr-2 text-green-600" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Contribute
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Seeking co-op opportunities in software development, embedded systems, or robotics 
            where I can apply my technical skills and drive innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors">
              Download Resume
            </button>
            <button className="border border-white hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;