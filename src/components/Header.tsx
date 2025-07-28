import React from 'react';
import { Menu, X, Download, Github, Linkedin, Mail, Eye } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Name */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => setActiveSection('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">MA</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Mohamed Amara</h1>
              <p className="text-sm text-slate-600">Mechatronics Engineer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {/* Quick Actions */}
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-slate-200">
  <a
    href="https://www.linkedin.com/in/mohamed-amara-1b45752b4" 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-2 text-slate-600 hover:text-blue-600 transition-colors"
  >
    <Linkedin size={18} />
  </a>
  <a
    href="mailto:mamara@uwaterloo.ca"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 text-slate-600 hover:text-blue-600 transition-colors"
  >
    <Mail size={18} />
  </a>
  <a
    href="/assets/resume.pdf" // Place your resume in /public/resume.pdf
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center"
  >
    <Eye size={16} className="mr-2" />
    View Resume
  </a>
</div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-200">
              <div className="flex space-x-4">
                <Github size={20} className="text-slate-600" />
                <Linkedin size={20} className="text-slate-600" />
                <Mail size={20} className="text-slate-600" />
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center">
                <Download size={16} className="mr-2" />
                Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;