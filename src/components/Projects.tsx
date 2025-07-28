import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Image, Video, FileText } from 'lucide-react';
import ProjectModal from './ProjectModal';

interface ProjectsProps {
  featured?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ featured = false }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Software', 'CAD/Design'];

  interface ProjectLinks {
    github?: string;
    demo?: string;
    video?: string;
    documentation?: string;
  }
  
  interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    technologies: string[];
    image: string;
    longDescription: string;
    duration: string;
    team: string;
    role: string;
    objectives: string[];
    challenges: string[];
    solutions: string[];
    results: string[];
    images: { url: string; title: string; caption: string }[];
    skills: string[];
    achievements: string[];
    links: ProjectLinks;
    highlights: string[];
    featured?: boolean;
  }
  
  const projects: Project[] = [
    {
  id: 1,
  title: 'Human-Powered Washing Machine',
  category: 'CAD/Design',
  description: 'Engineered an electricity-free washing machine using pedal power, chain systems, and ergonomic design to serve off-grid users.',
  technologies: ['SolidWorks', 'Chain Drive', 'Torque Simulation', 'Ergonomics', 'Material Selection'],
  image: '/assets/assemblyofwashingmachine.png', // Replace with the actual hosted image path
  longDescription: 'Designed and built a mechanical washing system powered by a pedal-driven chain and sprocket mechanism. The assembly includes a gear shifter for wash and spin cycles, a user-adjusted crank system for optimal torque, and a perforated drum designed for water drainage and efficiency. Ergonomic modeling was performed for comfort, and material selection (Aluminum 6061-T6 and SAE 1144 steel) ensured safety and durability. All subsystems were simulated and tested in SolidWorks.',
  duration: 'March 2025',
  team: '2-person design team',
  role: 'Lead Mechanical Designer',
  objectives: [
    'Design an electricity-free washer optimized for off-grid and rural settings',
    'Create a drivetrain capable of switching between wash and spin modes',
    'Model ergonomic interfaces using anthropometric data',
    'Ensure mechanical safety with a minimum factor of 2'
  ],
  challenges: [
    'Designing a dual-mode drivetrain for variable torque-speed needs',
    'Balancing comfort and mechanical efficiency in a compact layout',
    'Selecting lightweight, corrosion-resistant materials under budget constraints',
    'Validating strength and stress limits across all rotating components'
  ],
  solutions: [
    'Used a chain/sprocket system with gear selector to toggle between cycles',
    'Modeled 170 mm crank arms and user posture using 50th percentile data',
    'Chose Aluminum 6061-T6 and SAE 1144 steel for frame and shafts',
    'Ran rotational and torque simulations in SolidWorks to confirm performance'
  ],
  results: [
    'Achieved 200 RPM wash and 800 RPM spin cycles with pedal input',
    'Generated up to 300 N per pedal using ergonomic crank-arm sizing',
    'Validated frame integrity with simulated factor of safety ≥ 2',
    'Created fully documented CAD and assembly package'
  ],
  images: [
    {
      url: '/assets/bevelgearmechanismdesign.png',
      title: 'Bevel Gear Exploration',
      caption: 'Initial concept involving bevel gears was discarded due to lack of efficiency and practicality for mode-switching under load.'
    },
    {
      url: '/assets/chainandsprocketmechanism.png',
      title: 'Chain and Sprocket System',
      caption: 'Implemented a dual-ratio chain drive allowing real-time gear switching between wash and spin cycles using a selector hub.'
    },
    {
      url: '/assets/designofdrivesystem.png',
      title: 'Ergonomic Drive System',
      caption: 'Drive system layout featuring crank assembly, gear train, and drum input shaft, designed for optimized user torque generation.'
    },
    {
      url: '/assets/designofdrum.png',
      title: 'Drum Design and Drainage',
      caption: 'Perforated drum with truncated conic geometry optimized for balanced motion, rotation, and water management.'
    },
    {
      url: '/assets/rotationalmotionofdrum.png',
      title: 'Rotational Motion Analysis',
      caption: 'Simulation of angular velocity and dynamic balance during spin cycle using SolidWorks, ensuring efficient motion at 800 RPM.'
    },
    {
      url: '/assets/assemblyofwashingmachine.png',
      title: 'Full Assembly Overview',
      caption: 'Exploded view of washing machine with pedal system, frame, adjustable seat, and structural members showing load paths.'
    }
  ],
  skills: [
    'SolidWorks Assembly Modeling',
    'Chain Drive Design',
    'Rotational Dynamics',
    'Human Factors Engineering',
    'Torque & Load Calculations',
    'Fatigue & Safety Factor Simulation',
    'Off-grid System Design'
  ],
  achievements: [
    'Modeled full washing machine in SolidWorks with multi-cycle support',
    'Simulated gear dynamics and achieved safe rotational speed targets',
    'Integrated ergonomics and drivetrain mechanics seamlessly',
    'Presented as a sustainability-focused design capstone concept'
  ],
  links: {
    // documentation: '#', // Replace with Google Docs or PDF export if available
  },
  highlights: [
    'Pedal-powered multi-cycle drivetrain',
    'Validated ergonomic layout and torque input',
    'Chain-based gear selector system',
    'Simulated drum and shaft dynamics'
  ],
  featured: true,
},
    {
      id: 2,
      title: 'Financial Literacy Mobile App',
      category: 'Software',
      description: 'Built a comprehensive financial education app using Flutter and Node.js with user authentication, progress tracking, and interactive lessons.',
      technologies: ['Flutter', 'Node.js', 'Firebase', 'Dart'],
      image: '/assets/cwt.png',
      longDescription: 'Developed a comprehensive financial education platform that gamifies learning through interactive modules, real-time progress tracking, and personalized learning paths. The application features secure user authentication, cloud-based data synchronization, and an intuitive interface designed to make financial literacy accessible to users of all backgrounds.',
      duration: '4 months',
      team: 'Internship',
      role: 'Full-Stack Developer & UI/UX Designer',
      objectives: [
        'Create an engaging platform to improve financial literacy among young adults',
        'Implement gamification elements to increase user engagement and retention',
        'Develop a scalable backend system to handle user progress and content delivery',
        'Design an intuitive mobile-first interface for accessibility across devices'
      ],
      challenges: [
        'Designing an engaging user experience that maintains educational value',
        'Implementing secure authentication and data protection for financial information',
        'Creating a scalable backend architecture to support growing user base',
        'Balancing gamification elements without compromising educational content'
      ],
      solutions: [
        'Conducted user research and iterative design testing to optimize UX',
        'Implemented Firebase Authentication with multi-factor security measures',
        'Designed modular backend architecture using Node.js and cloud functions',
        'Created progressive difficulty levels with meaningful rewards and achievements'
      ],
      results: [
        'Achieved 40% increase in user engagement through gamification',
        'Successfully onboarded 500+ users within first month of launch',
        'Maintained 95% uptime with scalable cloud infrastructure',
        'Received positive feedback from 85% of beta testers'
      ],
      images: [
        {
          url: '/assets/cw1.png',
          title: 'App Dashboard Overview',
          caption: 'Main dashboard showing user progress, available lessons, and achievement tracking. The clean interface prioritizes ease of navigation while displaying key financial metrics and learning milestones.'
        },
        {
          url: '/assets/cw3.png',
          title: 'Interactive Learning Modules',
          caption: 'Gamified learning interface with progress bars, interactive quizzes, and real-time feedback. Each module builds upon previous concepts while maintaining user engagement through visual rewards.'
        },
        {
          url: '/assets/cw2.png',
          title: 'Financial Calculator Tools',
          caption: 'Built-in financial calculators for budgeting, loan calculations, and investment planning. These tools provide practical application of learned concepts with real-world scenarios.'
        }
      ],
      skills: [
        'Mobile App Development',
        'Backend API Design',
        'User Experience Design',
        'Database Architecture',
        'Authentication Systems',
        'Cloud Deployment',
        'Agile Development'
      ],
      achievements: [
        'Featured in university tech showcase',
        'Achieved 4.8/5 user satisfaction rating',
        'Implemented accessibility features for inclusive design',
        'Optimized app performance for 50% faster load times'
      ],
      links: {
        // github: '#',
        // demo: '#',
        // documentation: '#',
      },
      highlights: [
        'User authentication and progress tracking',
        'Interactive financial calculators',
        'Gamified learning modules',
        'Real-time data synchronization'
      ],
      featured: true,
    },
    {
      id: 3,
      title: 'Impact Reducing Bumper System',
      category: 'CAD/Design',
      description: 'Designed and implemented a bumper system achieving 50% collision impact reduction using popsicle sticks and rubber bands.',
      technologies: ['MATLAB', 'SolidWorks', 'GD&T', 'Structural Analysis'],
      image: '/assets/impactsketch.png',
      longDescription: 'Engineered an innovative collision impact reduction system using cost-effective materials (popsicle sticks and rubber bands) to achieve a 50% reduction in collision forces. The project involved extensive MATLAB simulation, structural analysis, and iterative design optimization to create a practical solution for low-speed vehicle safety.',
      duration: '3 months',
      team: '4-person engineering team',
      role: 'Lead Design Engineer & Simulation Specialist',
      objectives: [
        'Design a cost-effective bumper system to reduce collision impact by at least 40%',
        'Utilize readily available materials to demonstrate engineering principles',
        'Validate design through comprehensive MATLAB simulation and physical testing',
        'Create detailed technical documentation for manufacturing and assembly'
      ],
      challenges: [
        'Achieving significant impact reduction with limited material constraints',
        'Balancing structural integrity with energy absorption capabilities',
        'Accurately modeling complex material behavior in simulation software',
        'Optimizing design for both effectiveness and manufacturability'
      ],
      solutions: [
        'Developed innovative lattice structure design to maximize energy absorption',
        'Implemented iterative testing methodology with incremental design improvements',
        'Created detailed MATLAB models incorporating material non-linearities',
        'Applied GD&T principles to ensure consistent manufacturing tolerances'
      ],
      results: [
        'Achieved 50% reduction in peak collision forces during testing',
        'Demonstrated cost-effective solution using materials under $10',
        'Validated simulation accuracy within 5% of physical test results',
        'Received recognition for innovative approach to safety engineering'
      ],
      images: [
        {
          url: '/assets/impactsketch.png',
          title: 'Initial Design Concept',
          caption: 'Early conceptual sketches and material selection process. The design focused on creating a lattice structure that could effectively absorb and distribute impact forces while maintaining structural integrity.'
        },
        {
          url: '/assets/impactpicture.png',
          title: 'Built System',
          caption: 'Built final product capable of performing everything necessary.'
        },
        // {
        //   url: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=800',
        //   title: 'Physical Testing Setup',
        //   caption: 'Laboratory testing configuration with impact measurement equipment. Multiple test iterations were conducted to validate simulation results and optimize the final design parameters.'
        // }
      ],
      skills: [
        'Structural Analysis',
        'Material Science',
        'Impact Engineering',
        'GD&T Application',
        'Technical Documentation',
        'Experimental Design'
      ],
      achievements: [
        'Exceeded target impact reduction by 10%',
        'Mentored junior students in simulation techniques'
      ],
      links: {
        // documentation: '#',
        video: 'https://youtu.be/E1mUeeNmWD0',
      },
      highlights: [
        '50% reduction in collision impact',
        'Cost-effective material solution',
        'MATLAB simulation validation',
        'Real-time performance analysis'
      ],
    },
    {
      id: 4,
      title: 'Teacher-Course Assignment Optimizer',
      category: 'Software',
      description: 'Optimized course assignments for 200+ teachers using Java algorithms, improving efficiency and reducing scheduling conflicts.',
      technologies: ['Java', 'Algorithm Design', 'Data Structures', 'Optimization'],
      image: '/assets/western.jpeg',
      longDescription: 'Developed and implemented a sophisticated optimization algorithm to efficiently assign courses to 200+ teachers while minimizing scheduling conflicts and maximizing resource utilization. The system incorporated multiple constraints including teacher preferences, availability, expertise areas, and institutional requirements to create optimal course assignments.',
      duration: '6 months',
      team: 'Solo Developer',
      role: 'Algorithm Developer & System Architect',
      objectives: [
        'Reduce scheduling conflicts by at least 70% compared to manual assignment',
        'Optimize teacher-course matching based on expertise and preferences',
        'Create scalable system to handle growing faculty and course catalog',
        'Implement user-friendly interface for administrators and teachers'
      ],
      challenges: [
        'Managing complex multi-constraint optimization problem with 200+ variables',
        'Balancing competing priorities between efficiency and teacher satisfaction',
        'Handling dynamic changes in course requirements and teacher availability',
        'Ensuring system scalability for future institutional growth'
      ],
      solutions: [
        'Implemented genetic algorithm with custom fitness function for optimization',
        'Developed weighted scoring system to balance multiple assignment criteria',
        'Created modular architecture allowing real-time constraint updates',
        'Designed comprehensive testing framework to validate assignment quality'
      ],
      results: [
        'Achieved 80% reduction in scheduling conflicts',
        'Improved teacher satisfaction scores by 60%',
        'Reduced administrative workload by 15 hours per semester',
        'Successfully deployed system across multiple academic departments'
      ],
      images: [
        // {
        //   url: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
        //   title: 'Algorithm Architecture',
        //   caption: 'System architecture diagram showing the optimization algorithm flow, constraint handling, and decision-making process. The modular design allows for easy maintenance and feature additions.'
        // },
        // {
        //   url: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
        //   title: 'Performance Analytics Dashboard',
        //   caption: 'Real-time dashboard displaying assignment statistics, conflict resolution metrics, and system performance indicators. Administrators can monitor optimization results and make data-driven decisions.'
        // },
        // {
        //   url: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
        //   title: 'User Interface Design',
        //   caption: 'Clean, intuitive interface allowing teachers to input preferences and administrators to review assignments. The design prioritizes usability while providing comprehensive functionality.'
        // }
      ],
      skills: [
        'Algorithm Design',
        'Java Programming',
        'Data Structure Optimization',
        'System Architecture',
        'Database Design',
        'User Interface Development',
        'Performance Optimization'
      ],
      achievements: [
        'Reduced manual scheduling time by 90%',
        'Implemented across 5 academic departments',
        'Achieved 99.5% system uptime during deployment',
        'Trained 50+ faculty members on system usage'
      ],
      links: {
        // github: '#',
        // documentation: '#',
      },
      highlights: [
        'Optimized assignments for 200+ teachers',
        'Reduced scheduling conflicts by 80%',
        'Custom algorithm development',
        'Scalable system architecture'
      ],
      featured: true,
    },
    // {
    //   id: 4,
    //   title: 'Autonomous Robotic Vehicle',
    //   category: 'Robotics',
    //   description: 'Developed an autonomous vehicle using Arduino, sensors, and computer vision for navigation and obstacle avoidance.',
    //   technologies: ['Arduino', 'Python', 'OpenCV', 'Ultrasonic Sensors'],
    //   image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   longDescription: 'Designed and built an autonomous robotic vehicle capable of real-time navigation, obstacle detection, and path planning using computer vision and sensor fusion. The project integrated multiple technologies including Arduino microcontrollers, Python-based image processing, and advanced control algorithms to create a fully autonomous system.',
    //   duration: '5 months',
    //   team: '2-person robotics team',
    //   role: 'Lead Robotics Engineer & Software Developer',
    //   objectives: [
    //     'Develop autonomous navigation system with real-time obstacle avoidance',
    //     'Integrate computer vision for enhanced environmental awareness',
    //     'Implement robust control algorithms for smooth vehicle operation',
    //     'Create modular system architecture for future feature expansion'
    //   ],
    //   challenges: [
    //     'Achieving reliable obstacle detection in varying lighting conditions',
    //     'Balancing processing speed with navigation accuracy requirements',
    //     'Integrating multiple sensor inputs for robust decision making',
    //     'Optimizing power consumption for extended autonomous operation'
    //   ],
    //   solutions: [
    //     'Implemented adaptive computer vision algorithms with lighting compensation',
    //     'Developed multi-threaded processing architecture for real-time performance',
    //     'Created sensor fusion algorithm combining ultrasonic and visual data',
    //     'Optimized code efficiency and implemented power management protocols'
    //   ],
    //   results: [
    //     'Achieved 95% obstacle detection accuracy in diverse environments',
    //     'Successfully navigated complex indoor courses autonomously',
    //     'Maintained stable operation for 2+ hours on single battery charge',
    //     'Demonstrated scalable architecture for additional sensor integration'
    //   ],
    //   images: [
    //     {
    //       url: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=800',
    //       title: 'Complete Robotic System',
    //       caption: 'Fully assembled autonomous vehicle showing sensor placement, control electronics, and mechanical chassis. The compact design integrates all necessary components while maintaining accessibility for maintenance.'
    //     },
    //     {
    //       url: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
    //       title: 'Computer Vision Processing',
    //       caption: 'Real-time computer vision output showing obstacle detection, path planning, and navigation decisions. The system processes visual data to identify obstacles and plan optimal navigation routes.'
    //     },
    //     {
    //       url: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    //       title: 'Control System Architecture',
    //       caption: 'Detailed view of the control electronics including Arduino microcontroller, sensor interfaces, and motor control circuits. The modular design allows for easy troubleshooting and upgrades.'
    //     }
    //   ],
    //   skills: [
    //     'Robotics Engineering',
    //     'Computer Vision',
    //     'Embedded Programming',
    //     'Sensor Integration',
    //     'Control Systems',
    //     'Python Programming',
    //     'Hardware Design'
    //   ],
    //   achievements: [
    //     'Won first place in university robotics competition',
    //     'Achieved fastest autonomous navigation time',
    //     'Successfully demonstrated to industry professionals',
    //     'Inspired 3 follow-up research projects'
    //   ],
    //   links: {
    //     github: '#',
    //     video: '#',
    //   },
    //   highlights: [
    //     'Real-time obstacle detection',
    //     'Computer vision integration',
    //     'PID control implementation',
    //     'Wireless communication system'
    //   ],
    // },
    // {
    //   id: 5,
    //   title: 'Thermal Imaging Scope Model',
    //   category: 'CAD/Design',
    //   description: 'Designed detailed thermal imaging scope with lens housing, mounting interface, and multi-body part assembly in SolidWorks.',
    //   technologies: ['SolidWorks', 'Assembly Design', 'Technical Drawing', 'GD&T'],
    //   image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   longDescription: 'Created a comprehensive 3D model of a thermal imaging scope featuring detailed lens housing, precision mounting interfaces, and complex multi-body assemblies. The project demonstrated advanced CAD modeling techniques, optical component integration, and manufacturing-ready design principles suitable for precision optical equipment.',
    //   duration: '2 months',
    //   team: 'Individual Project',
    //   role: 'CAD Designer & Technical Drafter',
    //   objectives: [
    //     'Design detailed thermal imaging scope with accurate optical component placement',
    //     'Create manufacturing-ready drawings with proper GD&T specifications',
    //     'Develop modular assembly structure for easy maintenance and upgrades',
    //     'Ensure design meets industry standards for optical equipment housing'
    //   ],
    //   challenges: [
    //     'Accurately modeling complex optical components and their interactions',
    //     'Maintaining precise tolerances required for optical alignment',
    //     'Balancing structural integrity with weight optimization requirements',
    //     'Creating detailed technical drawings suitable for manufacturing'
    //   ],
    //   solutions: [
    //     'Researched industry standards and optical component specifications',
    //     'Implemented advanced SolidWorks features for complex geometry modeling',
    //     'Applied comprehensive GD&T principles for manufacturing precision',
    //     'Created detailed assembly instructions and exploded view drawings'
    //   ],
    //   results: [
    //     'Completed fully detailed 3D model with 50+ individual components',
    //     'Generated manufacturing-ready technical drawings with full GD&T',
    //     'Achieved design validation through structural analysis simulation',
    //     'Created comprehensive documentation package for production'
    //   ],
    //   images: [
    //     {
    //       url: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=800',
    //       title: 'Complete Assembly Model',
    //       caption: 'Fully assembled thermal imaging scope showing external housing, lens components, and mounting interfaces. The design incorporates industry-standard dimensions and optical specifications.'
    //     },
    //     {
    //       url: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
    //       title: 'Exploded Assembly View',
    //       caption: 'Detailed exploded view showing individual components and assembly sequence. Each part is precisely modeled with appropriate tolerances and manufacturing considerations.'
    //     },
    //     {
    //       url: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    //       title: 'Technical Drawing Package',
    //       caption: 'Professional technical drawings with complete dimensioning, GD&T specifications, and manufacturing notes. The drawings meet industry standards for precision optical equipment production.'
    //     }
    //   ],
    //   skills: [
    //     'Advanced CAD Modeling',
    //     'Assembly Design',
    //     'Technical Drawing',
    //     'GD&T Application',
    //     'Optical Component Design',
    //     'Manufacturing Design',
    //     'Documentation Standards'
    //   ],
    //   achievements: [
    //     'Achieved highest grade in advanced CAD course',
    //     'Model selected for department showcase',
    //     'Demonstrated professional-level technical drawing skills',
    //     'Created reusable component library for future projects'
    //   ],
    //   links: {
    //     documentation: '#',
    //   },
    //   highlights: [
    //     'Complex assembly structures',
    //     'Optical component placement',
    //     'Manufacturing-ready design',
    //     'Technical documentation'
    //   ],
    // },
    // {
    //   id: 6,
    //   title: 'Smart Home Control System',
    //   category: 'Control Systems',
    //   description: 'IoT-based home automation system with sensor integration, mobile app control, and energy monitoring capabilities.',
    //   technologies: ['Raspberry Pi', 'Python', 'IoT', 'Flask', 'React'],
    //   image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   longDescription: 'Developed a comprehensive IoT-based home automation system featuring multi-sensor integration, real-time energy monitoring, and intelligent control algorithms. The system provides centralized control of home devices through a responsive web interface while optimizing energy consumption and providing detailed usage analytics.',
    //   duration: '4 months',
    //   team: '3-person development team',
    //   role: 'IoT Systems Engineer & Backend Developer',
    //   objectives: [
    //     'Create centralized home automation system with multi-device control',
    //     'Implement real-time energy monitoring and optimization algorithms',
    //     'Develop responsive web interface for remote system management',
    //     'Ensure system security and reliable operation for continuous use'
    //   ],
    //   challenges: [
    //     'Integrating diverse IoT devices with different communication protocols',
    //     'Ensuring system reliability and security for home network deployment',
    //     'Optimizing real-time data processing for multiple sensor inputs',
    //     'Creating intuitive user interface for complex system management'
    //   ],
    //   solutions: [
    //     'Implemented unified communication protocol using MQTT messaging',
    //     'Developed secure authentication and encrypted data transmission',
    //     'Created efficient data processing pipeline with real-time analytics',
    //     'Designed responsive React interface with intuitive control layouts'
    //   ],
    //   results: [
    //     'Successfully integrated 15+ IoT devices across home environment',
    //     'Achieved 25% reduction in energy consumption through optimization',
    //     'Maintained 99% system uptime over 6-month testing period',
    //     'Received positive feedback from beta testing households'
    //   ],
    //   images: [
    //     {
    //       url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    //       title: 'System Architecture Overview',
    //       caption: 'Complete IoT system architecture showing sensor networks, central processing unit, and user interface components. The modular design allows for easy expansion and maintenance.'
    //     },
    //     {
    //       url: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    //       title: 'Web Interface Dashboard',
    //       caption: 'Responsive web dashboard displaying real-time system status, energy consumption metrics, and device control interfaces. The clean design prioritizes usability and information clarity.'
    //     },
    //     {
    //       url: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
    //       title: 'Hardware Implementation',
    //       caption: 'Raspberry Pi-based control hub with sensor interfaces and communication modules. The compact design integrates all necessary components for reliable home automation control.'
    //     }
    //   ],
    //   skills: [
    //     'IoT System Design',
    //     'Python Programming',
    //     'Web Development',
    //     'Network Security',
    //     'Real-time Systems',
    //     'Database Management',
    //     'User Interface Design'
    //   ],
    //   achievements: [
    //     'Demonstrated 25% energy savings in pilot deployment',
    //     'Successfully integrated with major smart home platforms',
    //     'Achieved sub-second response time for device control',
    //     'Created scalable architecture for commercial applications'
    //   ],
    //   links: {
    //     github: '#',
    //     demo: '#',
    //   },
    //   highlights: [
    //     'Multi-sensor integration',
    //     'Real-time energy monitoring',
    //     'Mobile app interface',
    //     'Automated control algorithms'
    //   ],
    // },
    
  ];

  const filteredProjects = featured 
    ? projects.filter(project => project.featured)
    : selectedCategory === 'All' 
      ? projects 
      : projects.filter(project => project.category === selectedCategory);

  const handleViewDetails = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
    <section className={`py-20 ${featured ? 'bg-slate-50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            {featured ? 'Featured Projects' : 'Project Portfolio'}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {featured 
              ? 'Highlights of my engineering work showcasing technical skills and innovative solutions.'
              : 'Comprehensive collection of engineering projects across robotics, software development, and design.'
            }
          </p>
        </div>

        {/* Category Filter (only show on full projects page) */}
        {!featured && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Filter size={14} className="inline mr-2" />
                {category}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Highlights */}
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm">Key Achievements:</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div className="flex space-x-3">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className="text-slate-500 hover:text-slate-700 transition-colors"
                        title="View Code"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        className="text-slate-500 hover:text-slate-700 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.links.video && (
                      <a
                        href={project.links.video}
                        className="text-slate-500 hover:text-slate-700 transition-colors"
                        title="Video Demo"
                      >
                        <Video size={16} />
                      </a>
                    )}
                    {project.links.documentation && (
                      <a
                        href={project.links.documentation}
                        className="text-slate-500 hover:text-slate-700 transition-colors"
                        title="Documentation"
                      >
                        <FileText size={16} />
                      </a>
                    )}
                  </div>
                  <button 
                    onClick={() => handleViewDetails(project)}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {featured && (
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
    
    <ProjectModal
      project={selectedProject}
      isOpen={isModalOpen}
      onClose={handleCloseModal}
    />
    </>
  );
};

export default Projects;