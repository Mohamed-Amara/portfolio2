import React from 'react';
import { MapPin, Calendar, Eye, Briefcase, Code } from 'lucide-react';

interface HeroProps {
  setActiveSection?: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const quickStats = [
    { icon: Briefcase, label: 'Years Experience', value: '3+' },
    { icon: Code, label: 'Projects Completed', value: '10+' },
  ];

  const handleViewProjects = () => {
    if (setActiveSection) {
      setActiveSection('projects'); // if using state navigation
    } else {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239CA3AF%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <div className="flex items-center mb-4">
              <MapPin size={16} className="mr-2 text-blue-400" />
              <span className="text-blue-400">University of Waterloo, Canada</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Mechatronics Engineer
              <span className="block text-2xl lg:text-3xl text-blue-400 mt-2">
                Specializing in Robotics & Embedded Systems
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed">
              Passionate about developing innovative engineering solutions through software, robotics, 
              and data-driven decision making. Currently seeking co-op opportunities in software 
              development, embedded systems, and robotics.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {[
                'Developed firmware and CAD models for robotics projects',
                'Optimized teacher-course assignments with Java algorithms',
                'Applied GIS technology for archaeological fieldwork',
                'Built financial literacy app using Flutter and Node.js',
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleViewProjects}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View Projects
              </button>
              <a
                href="/assets/resume.pdf" // Put your resume file in the public folder
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
              >
                <Eye size={18} className="mr-2" />
                View Resume
              </a>
            </div>
          </div>

          {/* Right Column - Quick Stats */}
          <div className="lg:pl-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">Quick Overview</h3>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {quickStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <stat.icon size={20} className="text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="font-medium mb-4">Core Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {['ROS2', 'Python', 'Java', 'C++', 'SolidWorks', 'AutoCAD', 'MATLAB', 'Flutter', 'Arduino'].map((skill) => (
                    <span key={skill} className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="mt-6 bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Calendar size={16} className="mr-2 text-green-400" />
                <span className="text-green-400 font-medium">Available for Co-op</span>
              </div>
              <p className="text-sm text-slate-300">
                Fall 2025 (4 or 8-month term)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
