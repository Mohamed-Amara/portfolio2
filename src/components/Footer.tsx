import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">MA</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Mohamed Amara</h3>
                <p className="text-slate-400 text-sm">Mechatronics Engineer</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Passionate about developing innovative engineering solutions through 
              software, robotics, and data-driven decision making.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'About', id: 'about' },
                { name: 'Projects', id: 'projects' },
                { name: 'Experience', id: 'experience' },
                { name: 'Education', id: 'education' },
                { name: 'Contact', id: 'contact' },
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="block text-slate-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-2 mb-6">
              <a
                href="mailto:mamara@uwaterloo.ca"
                className="flex items-center text-slate-400 hover:text-white transition-colors text-sm"
              >
                <Mail size={14} className="mr-2" />
                mamara@uwaterloo.ca
              </a>
              <p className="text-slate-400 text-sm">
                Available for co-op opportunities
              </p>
            </div>
            
            <div className="flex space-x-4">
              {/* <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                title="GitHub"
              >
                <Github size={18} />
              </a> */}
              <a
                href="https://www.linkedin.com/in/mohamed-amara-1b45752b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:mamara@uwaterloo.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm flex items-center justify-center">
            Made by Mohamed Amara
            <span className="mx-2">•</span>
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
