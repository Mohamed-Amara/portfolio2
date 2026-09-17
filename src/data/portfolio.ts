export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type ExperienceItem = {
  id: string;
  role: string;
  organization?: string;
  period: string;
  location?: string;
  context: string;
  additional?: boolean;
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
    }
  | {
      type: 'automotive';
      upperDisplay: string;
      lowerDisplay: string;
    };

export type ProjectItem = {
  id?: string;
  title: string;
  summary: string;
  bullets: readonly string[];
  technologies: readonly string[];
  visual: ProjectVisual;
  status?: 'In Development';
  detailHref?: `#${string}`;
};

export type DevelopmentPhase = {
  number: string;
  title: string;
  status: 'Current' | 'Planned';
  summary: string;
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

// The employer is confirmed by the user and the supplied Confluence export.
export const AI_HARDWARE_EMPLOYER = 'The Plug Co';
// An unconfirmed sales employer is omitted from the page.
export const DOOR_TO_DOOR_SALES_EMPLOYER: string | undefined = undefined;

export const contact = {
  name: 'Mohamed Amara',
  title: 'Mechatronics Engineering Student',
  email: 'mamara@uwaterloo.ca',
  emailHref: 'mailto:mamara@uwaterloo.ca',
  linkedin: 'https://www.linkedin.com/in/mohamed-amara-1b45752b4',
  location: 'Waterloo, Ontario, Canada',
  resumeHref: '/assets/resume.pdf',
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
    id: 'the-plug',
    period: 'Fall 2025 · Summer 2026',
    context: 'Memory Box — an AI application for organizing and searching photos, audio and video.',
    bullets: [
      'Collaborated on Memory Box from early design through AI and device integration, working across hardware requirements and software with the team.',
      'Contributed to Python AI processing and TypeScript device-data integration, including motion data, timestamp checks and recovery after disconnects.',
      'Created the initial UML deployment diagram to show how devices, backend services and storage would connect.',
      'Compared cloud and on-device AI processing in a hardware feasibility study and recommended using existing phones for the first release.',
    ],
    skills: [
      'Python', 'TypeScript', 'Device Integration', 'AI Processing', 'System Architecture', 'Hardware Feasibility',
    ],
  },
  {
    role: 'Door-to-Door Sales Representative',
    id: 'sales',
    context: 'Residential painting lead generation.',
    additional: true,
    organization: DOOR_TO_DOOR_SALES_EMPLOYER,
    period: 'Summer 2026',
    bullets: [
      'Spoke with homeowners about painting needs, answered initial questions and generated quote opportunities.',
      'Qualified interested homeowners and passed opportunities to the estimating and closing team.',
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
    role: 'Software Engineer Intern',
    id: 'coinwa',
    context: 'A mobile app that teaches teenagers budgeting and saving.',
    organization: 'CoinWa',
    period: 'January 2025 – April 2025',
    location: 'Remote',
    bullets: [
      'Developed Flutter and Dart screens for interactive financial-literacy lessons on mobile.',
      'Built Node.js and MongoDB services for accounts and learning progress, including email verification and password recovery.',
      'Debugged rendering and performance issues with Flutter DevTools to make the app work across screen sizes.',
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
    id: 'wsp',
    context: 'Archaeological field surveys and site documentation.',
    additional: true,
    organization: 'WSP',
    period: 'May 2024 – August 2024',
    location: 'Thunder Bay, Ontario',
    bullets: [
      'Mapped archaeological sites with GPS and GIS and maintained field records during surveys and excavations.',
      'Collected and preserved artifacts and soil data while following site safety and quality procedures.',
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
    id: 'western',
    context: 'A Java tool for assigning instructors to courses.',
    organization: 'Western University',
    period: 'February 2023 – June 2023',
    location: 'London, Ontario',
    bullets: [
      'Developed a Java application to assign instructors to courses using qualifications and availability as constraints.',
      'Replaced repetitive manual assignments, improving allocation efficiency by approximately 80%.',
      'Worked with departmental staff to refine requirements, then trained them and documented how to use the tool.',
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
    id: 'washing-machine',
    summary:
      'A pedal-powered washing machine designed to wash clothes without electricity.',
    bullets: [
      'Modelled the drum, frame, seat and drivetrain as a SolidWorks assembly.',
      'Calculated shaft loads, torque and fatigue to size transmission parts for a target safety factor of 2.',
      'Designed two chain-drive ratios to provide different speeds for washing and spin drying.',
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
    title: 'OEM CarPlay Integration — 2016 Acura ILX',
    summary:
      'I’m working on adding wireless CarPlay to my 2016 Acura ILX while keeping its two factory screens, steering-wheel controls and backup camera.',
    bullets: [
      'The plan: a small Linux/Android computer runs CarPlay, while an STM32 handles power, buttons and screen switching.',
      'Current focus: figuring out how the factory screens connect and planning tests on a donor unit.',
      'A key requirement: the factory system and backup camera must still work if my hardware fails.',
    ],
    technologies: [
      'Embedded Systems',
      'STM32',
      'Reverse Engineering',
      'Automotive Electronics',
      'Hardware-Software Integration',
    ],
    visual: {
      type: 'automotive',
      upperDisplay: 'CarPlay on the top screen',
      lowerDisplay: 'Keep the factory controls',
    },
    status: 'In Development',
    detailHref: '#automotive-infotainment',
  },
  {
    title: 'Armada',
    summary:
      'A web app for planning routes and driving together in a convoy.',
    bullets: [
      'Developed live maps, route lines and nearby-place search using Next.js and React-Leaflet.',
      'Created user profiles and connected the frontend to Firebase and a Node.js, Express and MongoDB backend.',
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
      'A point-of-sale app for a café in Libya, with an Arabic interface and Libyan-dinar transactions.',
    bullets: [
      'Developed order entry, product management and transaction workflows in React and Tailwind.',
      'Designed right-to-left screens and receipt layouts for an 80 mm thermal printer.',
      'Worked on desktop packaging and local storage with Electron and SQLite.',
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
      'The financial-literacy app I worked on during my CoinWa internship.',
    bullets: [
      'Created Flutter screens for lessons and learning progress.',
      'Connected accounts and progress tracking to Node.js and MongoDB, including email verification and password recovery.',
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
      'A Java application I developed at Western University to automate instructor-course assignments.',
    bullets: [
      'Applied instructor qualifications and availability as constraints to replace repetitive manual assignments.',
      'Refined the tool with departmental staff and trained them to use it.',
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

export const profile = {
  academicStage: '3B Mechatronics Engineering',
  availability: 'Available for co-op from Winter 2027 onward',
  focus: ['Embedded systems', 'Hardware/software integration', 'Software development'],
} as const;

export const automotiveProject = {
  status: 'In Development',
  currentPhase: 'Research & design',
  overview:
    'My ILX has two factory screens, navigation and ELS audio, but no CarPlay. I want CarPlay on the top screen, where it’s easier to see, and to keep the original controls on the lower touchscreen.',
  completedResearch: [
    'Researched the Acura/Alpine hardware used in the factory system.',
    'Chose the top screen for CarPlay and outlined how the two controllers would work together.',
    'Set the main requirements: keep factory controls, prioritize the backup camera and fall back to the original system on a fault.',
  ],
  currentWork: [
    'Planning a donor-unit teardown so I can study the hardware without risking the working system in my car.',
    'Working out what signals and voltages to measure with an oscilloscope and logic analyzer.',
    'Looking into video switching and protection from vehicle power spikes.',
  ],
  plannedImplementation: [
    'Get CarPlay, screen switching, touch input and audio working on the bench.',
    'Write STM32 firmware for startup, shutdown, reverse detection and button inputs.',
    'Build a custom PCB and plug-in wiring harness, then test the system in the car.',
  ],
  architecture: [
    'iPhone',
    'CarPlay receiver',
    'Linux / Android computer',
    'Video interface',
    'Factory top screen',
  ],
  controllerFunctions: [
    'Ignition detection',
    'Backup-camera priority',
    'Startup & shutdown',
    'Screen switching',
    'Button inputs',
    'Fault detection',
  ],
  safeguards: [
    {
      title: 'Fall back to the factory system',
      description:
        'If my hardware loses power or crashes, the screen should return to the original Acura system.',
    },
    {
      title: 'Backup camera comes first',
      description:
        'Selecting reverse should bring up the factory camera, even if the CarPlay computer stops responding.',
    },
    {
      title: 'Handle vehicle power safely',
      description:
        'The electronics need protection from voltage spikes and reversed polarity, plus time to shut down properly when the car turns off.',
    },
  ],
  phases: [
    {
      number: '01',
      title: 'Research & design',
      status: 'Current',
      summary: 'Understand the factory system and plan the integration.',
    },
    {
      number: '02',
      title: 'Donor teardown',
      status: 'Planned',
      summary: 'Identify the screens, chips and internal connections.',
    },
    {
      number: '03',
      title: 'Measure the signals',
      status: 'Planned',
      summary: 'Measure voltages and capture video, touch and control signals.',
    },
    {
      number: '04',
      title: 'Bench Prototype',
      status: 'Planned',
      summary: 'Test CarPlay, touch, audio and screen switching outside the car.',
    },
    {
      number: '05',
      title: 'Vehicle Controller',
      status: 'Planned',
      summary: 'Write the STM32 code for power, controls and fault handling.',
    },
    {
      number: '06',
      title: 'Custom PCB',
      status: 'Planned',
      summary: 'Bring power protection, controllers and connectors onto one board.',
    },
    {
      number: '07',
      title: 'Test in the car',
      status: 'Planned',
      summary: 'Check the camera, factory fallback, controls and audio.',
    },
    {
      number: '08',
      title: 'Finish & document',
      status: 'Planned',
      summary: 'Build the enclosure, test heat and reliability, and improve boot time.',
    },
  ] satisfies readonly DevelopmentPhase[],
  coreTechnologies: [
    'STM32',
    'C/C++',
    'Embedded Linux / Android',
    'KiCad',
    'Oscilloscope',
    'Logic Analyzer',
    'Automotive Power Electronics',
    'USB HID',
  ],
  researchTargets: [
    'OEM display signalling',
    'Touchscreen protocol',
    'GA-Net',
    'CAN / LIN',
    'Steering-wheel inputs',
    'High-speed video switching',
  ],
} as const;

export const skillGroups: readonly SkillGroup[] = [
  {
    title: 'Embedded & lab',
    skills: [
      'C++',
      'Python',
      'STM32',
      'Sensors',
      'Instrumentation',
      'UART',
      'SPI',
      'I²C',
      'Oscilloscope',
      'Logic Analyzer',
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
    title: 'Engineering & CAD',
    skills: [
      'Hardware-Software Integration',
      'SolidWorks',
      'AutoCAD',
      'KiCad',
      'MATLAB',
      'Multimeter',
      'Soldering',
      'Control Systems',
    ],
  },
  {
    title: 'System design & communication',
    skills: [
      'UML',
      'Hardware Feasibility',
      'Requirements Analysis',
      'Technical Documentation',
      'Technical Communication',
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
