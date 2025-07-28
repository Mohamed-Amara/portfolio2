import React from 'react';
import { GraduationCap, Award, Book, Calendar, MapPin, Star } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Applied Science - Mechatronics Engineering',
      institution: 'University of Waterloo',
      location: 'Waterloo, ON, Canada',
      duration: '2023 - 2028 (Expected)',
      
      status: 'In Progress',
      description: 'Comprehensive program combining mechanical, electrical, and software engineering with focus on robotics and automation systems.',
      relevantCourses: [
        'Control Systems Engineering',
        'Embedded Systems Design',
        'Robotics and Automation',
        'Digital Signal Processing',
        'Machine Design',
        'Programming for Engineers',
        'Linear Circuits & Systems',
        'Kinematics and Dynamics'
      ],
      achievements: [
        "Dean's Honor List (3 terms)",
        'Undergraduate Research Award',
        'Engineering Excellence Scholarship',
        'Best Project Award - Design Course'
      ],
      icon: GraduationCap,
    }
  ];

  const certifications = [
    {
      name: 'SolidWorks Professional (CSWP)',
      issuer: 'Dassault Systèmes',
      date: '2024',
      description: 'Advanced 3D CAD modeling, assembly design, and drawing creation',
      skills: ['3D Modeling', 'Assembly Design', 'Technical Drawing', 'Simulation'],
      verified: true,
    },
    {
      name: 'AutoCAD Certified User',
      issuer: 'Autodesk',
      date: '2023',
      description: '2D drafting, technical drawing, and design documentation',
      skills: ['2D Drafting', 'Technical Drawing', 'Design Documentation'],
      verified: true,
    },
    // {
    //   name: 'Python for Data Science',
    //   issuer: 'IBM/Coursera',
    //   date: '2023',
    //   description: 'Data analysis, visualization, and machine learning fundamentals',
    //   skills: ['Data Analysis', 'NumPy', 'Pandas', 'Matplotlib'],
    //   verified: true,
    // },
    // {
    //   name: 'Arduino Programming Specialist',
    //   issuer: 'Arduino Certification',
    //   date: '2023',
    //   description: 'Embedded systems programming and hardware integration',
    //   skills: ['Embedded Programming', 'Sensor Integration', 'IoT Development'],
    //   verified: false,
    // },
    // {
    //   name: 'Project Management Fundamentals',
    //   issuer: 'PMI',
    //   date: '2024',
    //   description: 'Project lifecycle, risk management, and team leadership',
    //   skills: ['Project Planning', 'Risk Management', 'Team Leadership'],
    //   verified: true,
    // },
    {
      name: 'GIS Fundamentals',
      issuer: 'ESRI',
      date: '2023',
      description: 'Geographic information systems and spatial data analysis',
      skills: ['Spatial Analysis', 'ArcGIS', 'Data Visualization'],
      verified: true,
    },
  ];

  const onlineLearning = [
    { platform: 'MIT OpenCourseWare', courses: 12, focus: 'Advanced Mathematics & Physics' },
    { platform: 'Coursera', courses: 8, focus: 'Machine Learning & Data Science' },
    { platform: 'edX', courses: 5, focus: 'Robotics & Control Systems' },
    { platform: 'Udemy', courses: 15, focus: 'Programming & Web Development' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Education & Qualifications
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Strong academic foundation in mechatronics engineering complemented by professional 
            certifications and continuous learning in emerging technologies.
          </p>
        </div>

        {/* University Education */}
        <div className="mb-16">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-8 shadow-lg"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start mb-4 lg:mb-0">
                  <div className="bg-blue-600 p-3 rounded-lg mr-4 flex-shrink-0">
                    <edu.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {edu.degree}
                    </h3>
                    <div className="text-xl font-semibold text-blue-600 mb-2">
                      {edu.institution}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-2">
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {edu.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {edu.duration}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {/* <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        GPA: {edu.gpa}
                      </span> */}
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-slate-700 mb-6 leading-relaxed">
                {edu.description}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Relevant Courses */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
                    <Book size={16} className="mr-2 text-blue-600" />
                    Relevant Coursework
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {edu.relevantCourses.map((course, courseIndex) => (
                      <div key={courseIndex} className="flex items-center text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                        {course}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Achievements */}
                {/* <div>
                  <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
                    <Star size={16} className="mr-2 text-yellow-600" />
                    Academic Achievements
                  </h4>
                  <div className="space-y-2">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></div>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-slate-200 p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Award size={20} className="text-green-600" />
                  </div>
                  {cert.verified && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                      Verified
                    </span>
                  )}
                </div>
                
                <h4 className="font-semibold text-slate-900 mb-2">
                  {cert.name}
                </h4>
                <div className="text-sm text-slate-600 mb-2">
                  {cert.issuer} • {cert.date}
                </div>
                <p className="text-sm text-slate-700 mb-4">
                  {cert.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Online Learning */}
        {/* <div className="bg-slate-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Continuous Learning
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {onlineLearning.map((platform, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {platform.courses}+
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    {platform.platform}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {platform.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-slate-600 text-sm">
              <strong>40+ completed courses</strong> in engineering, programming, and emerging technologies
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Education;