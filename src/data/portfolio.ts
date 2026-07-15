export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type ExperienceItem = {
  role: string;
  organization?: string;
  period: string;
  location?: string;
  bullets: readonly string[];
  skills: readonly string[];
};

export type ProjectVisual =
  | {
      type: 'images';
      images: readonly {
        src: string;
        alt: string;
      }[];
    }
  | {
      type: 'system';
      label: string;
      nodes: readonly string[];
    };

export type ProjectItem = {
  title: string;
  summary: string;
  bullets: readonly string[];
  technologies: readonly string[];
  visual: ProjectVisual;
};

export type SkillGroup = {
  title: string;
  skills: readonly string[];
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
  coursework: readonly string[];
};

// Replace these constants once the employer names are verified. Undefined values
// are intentionally omitted from the rendered experience entries.
export const AI_HARDWARE_EMPLOYER: string | undefined = undefined;
export const DOOR_TO_DOOR_SALES_EMPLOYER: string | undefined = undefined;

export const contact = {
  name: 'Mohamed Amara',
  title: 'Mechatronics Engineering Student',
  email: 'mamara@uwaterloo.ca',
  emailHref: 'mailto:mamara@uwaterloo.ca',
  linkedin: 'https://www.linkedin.com/in/mohamed-amara-1b45752b4',
  location: 'Waterloo, Ontario, Canada',
} as const;

export const navigation: readonly NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const experiences: readonly ExperienceItem[] = [
  {
    role: 'AI/Hardware Systems Developer',
    organization: AI_HARDWARE_EMPLOYER,
    period: 'Summer 2026 – Present',
    bullets: [
      'Develop AI-integrated hardware and software systems using Python, C++, sensors and embedded devices.',
      'Build and test hardware-software prototypes, troubleshoot integration issues and improve system reliability.',
      'Create supporting interfaces and backend functionality using Node.js and React to monitor and interact with connected systems.',
      'Document system behaviour, testing results and technical requirements to support continued development.',
    ],
    skills: [
      'Embedded Systems',
      'Artificial Intelligence',
      'Python',
      'C++',
      'Hardware-Software Integration',
    ],
  },
  {
    role: 'Door-to-Door Sales Representative',
    organization: DOOR_TO_DOOR_SALES_EMPLOYER,
    period: 'Summer 2026',
    bullets: [
      'Conducted door-to-door outreach to homeowners to generate qualified quote opportunities for residential painting services.',
      'Identified customer needs, communicated service value and addressed initial objections.',
      'Qualified interested homeowners and transferred opportunities to the estimating and closing team.',
      'Adapted the pitch based on homeowner concerns, property conditions and neighbourhood characteristics.',
    ],
    skills: [
      'Door-to-Door Sales',
      'Lead Generation',
      'Prospecting',
      'Objection Handling',
      'Customer Qualification',
    ],
  },
  {
    role: 'AI/Hardware Systems Developer',
    organization: AI_HARDWARE_EMPLOYER,
    period: 'Fall 2025',
    bullets: [
      'Developed embedded and software components for AI and hardware-based systems using Python, C++ and microcontrollers.',
      'Integrated sensors and instrumentation to collect, process and communicate real-world data.',
      'Tested prototypes, diagnosed hardware and software issues and implemented improvements based on results.',
      'Collaborated on system design, technical documentation and functional project demonstrations.',
    ],
    skills: [
      'Microcontrollers',
      'Sensors',
      'Instrumentation',
      'Embedded Software',
      'System Testing',
    ],
  },
  {
    role: 'Software Engineer Intern',
    organization: 'CoinWa',
    period: 'January 2025 – April 2025',
    location: 'Remote',
    bullets: [
      'Developed a cross-platform financial-literacy application using Flutter and Dart to teach teenagers budgeting and saving skills.',
      'Built backend services using Node.js and MongoDB to manage authentication, user data and learning progress.',
      'Implemented account registration, email verification and password-recovery functionality.',
      'Designed responsive interfaces and resolved performance and rendering issues using Flutter DevTools.',
    ],
    skills: [
      'Flutter',
      'Dart',
      'Node.js',
      'MongoDB',
      'Mobile Application Development',
    ],
  },
  {
    role: 'Field Technician',
    organization: 'WSP',
    period: 'May 2024 – August 2024',
    location: 'Thunder Bay, Ontario',
    bullets: [
      'Conducted archaeological surveys, excavations and soil-stratigraphy analysis while maintaining accurate field records.',
      'Mapped and documented archaeological sites using GPS and GIS technology.',
      'Collected, organized and preserved artifacts and field data according to technical procedures.',
      'Followed environmental, quality and safety standards across outdoor project sites.',
    ],
    skills: [
      'Geographic Information Systems',
      'Global Positioning System',
      'Field Data Collection',
      'Technical Documentation',
      'Workplace Safety',
    ],
  },
  {
    role: 'Software Engineering Intern',
    organization: 'Western University',
    period: 'February 2023 – June 2023',
    location: 'London, Ontario',
    bullets: [
      'Developed a Java application that automated teacher-course assignments based on instructor qualifications and availability.',
      'Improved allocation efficiency by approximately 80% by replacing repetitive manual processes.',
      'Gathered requirements and refined the application through direct collaboration with departmental stakeholders.',
      'Trained staff on application use and created technical documentation to support adoption and maintenance.',
    ],
    skills: [
      'Java',
      'Software Development',
      'Requirements Gathering',
      'Process Automation',
      'Technical Training',
    ],
  },
];

export const projects: readonly ProjectItem[] = [
  {
    title: 'Human-Powered Washing Machine',
    summary:
      'Portable, electricity-free laundry system designed around a pedal-powered drivetrain for off-grid and sustainable use.',
    bullets: [
      'Developed a SolidWorks assembly incorporating the drum, frame, seat and drivetrain.',
      'Performed load, torque and fatigue calculations for shafts and transmission components, targeting a safety factor of 2.',
      'Designed a dual-ratio chain-and-sprocket system for washing and spin-dry operation.',
    ],
    technologies: [
      'SolidWorks',
      'Mechanical Design',
      'Chain Drives',
      'Engineering Analysis',
      'Material Selection',
    ],
    visual: {
      type: 'images',
      images: [
        {
          src: '/assets/assemblyofwashingmachine.png',
          alt: 'SolidWorks assembly of the pedal-powered washing machine',
        },
        {
          src: '/assets/chainandsprocketmechanism.png',
          alt: 'Chain-and-sprocket drivetrain design for the washing machine',
        },
      ],
    },
  },
  {
    title: 'Armada',
    summary:
      'Vehicle convoy and community platform with live navigation and group-driving functionality.',
    bullets: [
      'Developed live-map, route-polyline, nearby-place and user-profile functionality.',
      'Built the frontend using Next.js, Tailwind CSS, Framer Motion and React-Leaflet.',
      'Integrated Firebase services and a Node.js, Express and MongoDB backend.',
    ],
    technologies: [
      'Next.js',
      'React',
      'Node.js',
      'MongoDB',
      'Firebase',
      'React-Leaflet',
    ],
    visual: {
      type: 'system',
      label: 'Live convoy system',
      nodes: ['Route', 'Convoy', 'Nearby', 'Profile'],
    },
  },
  {
    title: 'Arabic Café Point-of-Sale System',
    summary:
      'Arabic right-to-left point-of-sale application designed around the operating needs of a café in Libya.',
    bullets: [
      'Developed order, product and transaction workflows for Libyan-dinar operations.',
      'Designed an Arabic RTL interface compatible with an 80 mm thermal receipt printer.',
      'Built the application using React and Tailwind, with desktop and local-storage development using Electron and SQLite.',
    ],
    technologies: [
      'React',
      'Tailwind CSS',
      'Electron',
      'SQLite',
      'Arabic RTL Design',
    ],
    visual: {
      type: 'system',
      label: 'نظام نقطة البيع',
      nodes: ['الطلبات', 'المنتجات', 'الدفع', 'الإيصال'],
    },
  },
  {
    title: 'CoinWa Financial Literacy App',
    summary:
      'Cross-platform mobile application designed to teach teenagers budgeting and saving through interactive modules.',
    bullets: [
      'Developed responsive Flutter interfaces and gamified financial-literacy modules.',
      'Built Node.js and MongoDB services for authentication, user data and progress tracking.',
      'Implemented email verification and password-recovery workflows.',
    ],
    technologies: ['Flutter', 'Dart', 'Node.js', 'MongoDB'],
    visual: {
      type: 'images',
      images: [
        {
          src: '/assets/cw1.png',
          alt: 'CoinWa mobile app onboarding screen',
        },
        {
          src: '/assets/cw2.png',
          alt: 'CoinWa financial-literacy lesson screen',
        },
        {
          src: '/assets/cw3.png',
          alt: 'CoinWa mobile app progress screen',
        },
      ],
    },
  },
  {
    title: 'Teacher-Course Assignment Optimizer',
    summary:
      'Java application that automated instructor-course assignments using qualifications and availability.',
    bullets: [
      'Converted a repetitive manual allocation process into a structured software workflow.',
      'Applied instructor qualifications and availability as assignment constraints.',
      'Worked directly with departmental stakeholders and trained staff on application use.',
    ],
    technologies: ['Java', 'Algorithms', 'Data Structures', 'Process Automation'],
    visual: {
      type: 'images',
      images: [
        {
          src: '/assets/western.jpeg',
          alt: 'Western University crest',
        },
      ],
    },
  },
];

export const skillGroups: readonly SkillGroup[] = [
  {
    title: 'Embedded and Robotics',
    skills: [
      'C++',
      'Python',
      'STM32',
      'ESP32',
      'ROS 2',
      'FreeRTOS',
      'Sensors',
      'Instrumentation',
      'UART',
      'SPI',
      'I²C',
      'CAN',
    ],
  },
  {
    title: 'Software',
    skills: [
      'JavaScript',
      'TypeScript',
      'Node.js',
      'React',
      'Next.js',
      'Flutter',
      'Dart',
      'Java',
      'MongoDB',
      'Firebase',
      'Git',
    ],
  },
  {
    title: 'Hardware and Engineering',
    skills: [
      'Hardware-Software Integration',
      'SolidWorks',
      'AutoCAD',
      'KiCad',
      'MATLAB',
      'Oscilloscope',
      'Logic Analyzer',
      'Multimeter',
      'Soldering',
      'Control Systems',
    ],
  },
  {
    title: 'Sales and Communication',
    skills: [
      'Prospecting',
      'Lead Generation',
      'Customer Qualification',
      'Objection Handling',
      'Technical Communication',
      'Requirements Gathering',
      'Product Demonstration',
    ],
  },
];

export const education: Education = {
  institution: 'University of Waterloo',
  degree:
    'Candidate for Bachelor of Applied Science, Honours Mechatronics Engineering',
  period: 'September 2023 – April 2028 expected',
  coursework: [
    'Sensors and Instrumentation',
    'Engineering Design',
    'Digital Logic',
    'Solid Mechanics',
    'Circuits',
    'Computer Structures and Real-Time Systems',
  ],
};
