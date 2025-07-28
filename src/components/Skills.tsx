import React from 'react';
import { Code, Cpu, Wrench, Database, Zap, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      color: 'blue',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'JavaScript/TypeScript', level: 75 },
        { name: 'MATLAB', level: 85 },
        { name: 'Dart/Flutter', level: 70 },
      ],
    },
    {
      icon: Cpu,
      title: 'Hardware & Embedded',
      color: 'orange',
      skills: [
        { name: 'Arduino', level: 85 },
        { name: 'Raspberry Pi', level: 80 },
        { name: 'PCB Design', level: 70 },
        { name: 'Microcontrollers', level: 75 },
        { name: 'Sensors & Actuators', level: 80 },
        { name: 'Circuit Analysis', level: 85 },
      ],
    },
    {
      icon: Wrench,
      title: 'CAD & Design',
      color: 'green',
      skills: [
        { name: 'SolidWorks', level: 90 },
        { name: 'AutoCAD', level: 85 },
        { name: 'Fusion 360', level: 75 },
        { name: '3D Printing', level: 80 },
        { name: 'Technical Drawing', level: 90 },
        { name: 'FEA Analysis', level: 70 },
      ],
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      color: 'purple',
      skills: [
        { name: 'SQL', level: 75 },
        { name: 'Data Analysis', level: 80 },
        { name: 'GIS Systems', level: 85 },
        { name: 'Machine Learning', level: 70 },
        { name: 'Statistical Analysis', level: 75 },
        { name: 'Data Visualization', level: 80 },
      ],
    },
    {
      icon: Zap,
      title: 'Control Systems',
      color: 'yellow',
      skills: [
        { name: 'PID Control', level: 85 },
        { name: 'Signal Processing', level: 80 },
        { name: 'System Modeling', level: 75 },
        { name: 'Feedback Systems', level: 80 },
        { name: 'State-Space Control', level: 70 },
        { name: 'Digital Control', level: 75 },
      ],
    },
    {
      icon: Brain,
      title: 'Engineering Skills',
      color: 'indigo',
      skills: [
        { name: 'Problem Solving', level: 95 },
        { name: 'Project Management', level: 80 },
        { name: 'Technical Writing', level: 85 },
        { name: 'Team Collaboration', level: 90 },
        { name: 'Research & Development', level: 85 },
        { name: 'Quality Assurance', level: 80 },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200',
      indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200',
    };
    return colors[color as keyof typeof colors];
  };

  const getProgressColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-600',
      orange: 'bg-orange-600',
      green: 'bg-green-600',
      purple: 'bg-purple-600',
      yellow: 'bg-yellow-600',
      indigo: 'bg-indigo-600',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive skill set spanning mechanical engineering, software development, 
            and embedded systems with hands-on project experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center ${getColorClasses(category.color)}`}>
                  <category.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 ml-3">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">
                        {skill.name}
                      </span>
                      <span className="text-xs text-slate-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ${getProgressColorClasses(category.color)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Certifications & Training
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'SolidWorks Professional',
              'AutoCAD Certified User',
              'Python for Data Science',
              'Project Management',
              'Arduino Programming',
              'GIS Fundamentals',
              'Safety Training',
              'Technical Writing',
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-4 text-center border border-slate-200 hover:border-blue-300 transition-colors"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-semibold text-sm">✓</span>
                </div>
                <h4 className="font-medium text-slate-900 text-sm">{cert}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;