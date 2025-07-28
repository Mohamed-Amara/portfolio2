import React from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Github, Calendar, User, Award } from 'lucide-react';

interface ProjectImage {
  url: string;
  caption: string;
  title?: string;
}

interface ProjectDetail {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  duration: string;
  team?: string;
  role: string;
  objectives: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  images: ProjectImage[];
  links: {
    github?: string;
    demo?: string;
    documentation?: string;
    video?: string;
  };
  skills: string[];
  achievements: string[];
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  React.useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  if (!isOpen || !project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between rounded-t-2xl z-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">{project.title}</h2>
              <div className="flex items-center gap-4 mt-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <div className="flex items-center text-sm text-slate-600">
                  <Calendar size={14} className="mr-1" />
                  {project.duration}
                </div>
                {project.team && (
                  <div className="flex items-center text-sm text-slate-600">
                    <User size={14} className="mr-1" />
                    {project.team}
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X size={24} className="text-slate-600" />
            </button>
          </div>

          <div className="p-6">
            {/* Image Gallery */}
            {project.images.length > 0 && (
              <div className="mb-8">
                <div className="relative bg-slate-100 rounded-xl overflow-hidden mb-4">
                  <img
                    src={project.images[currentImageIndex].url}
                    alt={project.images[currentImageIndex].title || project.title}
                    className="max-h-[80vh] w-full object-contain mx-auto"
                  />
                  
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                      >
                        <ChevronLeft size={20} className="text-slate-700" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                      >
                        <ChevronRight size={20} className="text-slate-700" />
                      </button>
                    </>
                  )}
                  
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Image Caption */}
                <div className="bg-slate-50 rounded-lg p-4">
                  {project.images[currentImageIndex].title && (
                    <h4 className="font-semibold text-slate-900 mb-2">
                      {project.images[currentImageIndex].title}
                    </h4>
                  )}
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {project.images[currentImageIndex].caption}
                  </p>
                </div>

                {/* Thumbnail Navigation */}
                {project.images.length > 1 && (
                  <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
                    {project.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                          index === currentImageIndex
                            ? 'border-blue-500'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <img
                          src={image.url}
                          alt={`${project.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Overview */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Project Overview</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">{project.longDescription}</p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">My Role</h4>
                    <p className="text-blue-800 text-sm">{project.role}</p>
                  </div>
                </div>

                {/* Objectives */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Objectives</h3>
                  <ul className="space-y-2">
                    {project.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges & Solutions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Challenges</h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-slate-700 text-sm">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Solutions</h3>
                    <ul className="space-y-2">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-slate-700 text-sm">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Results & Impact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.results.map((result, index) => (
                      <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Award size={16} className="text-green-600 mr-2" />
                          <span className="font-medium text-green-900">Achievement</span>
                        </div>
                        <p className="text-green-800 text-sm">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skills Demonstrated */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Skills Demonstrated</h3>
                  <div className="space-y-2">
                    {project.skills.map((skill, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-slate-700 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {/* {(project.links.github || project.links.demo || project.links.documentation || project.links.video) && (
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Project Links</h3>
                    <div className="space-y-3">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          className="flex items-center p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
                        >
                          <Github size={18} className="text-slate-600 mr-3" />
                          <span className="text-slate-700 text-sm">View Source Code</span>
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          className="flex items-center p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
                        >
                          <ExternalLink size={18} className="text-slate-600 mr-3" />
                          <span className="text-slate-700 text-sm">Live Demo</span>
                        </a>
                      )}
                      {project.links.documentation && (
                        <a
                          href={project.links.documentation}
                          className="flex items-center p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
                        >
                          <ExternalLink size={18} className="text-slate-600 mr-3" />
                          <span className="text-slate-700 text-sm">Documentation</span>
                        </a>
                      )}
                    </div>
                  </div>
                )} */}

                {/* Key Achievements */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Key Achievements</h3>
                  <div className="space-y-2">
                    {project.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start">
                        <Award size={14} className="text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;