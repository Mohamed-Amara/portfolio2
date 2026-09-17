export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type ExperienceItem = {
  id: string;
  role: string;
  organization?: string;
  period: string;
  context: string;
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

export const contact = {
  name: 'Mohamed Amara',
  title: 'Mechatronics Engineering Student',
  email: 'mamara@uwaterloo.ca',
  emailHref: 'mailto:mamara@uwaterloo.ca',
  linkedin: 'https://www.linkedin.com/in/mohamed-amara-1b45752b4',
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
    role: 'AI & Hardware Systems Developer',
    organization: 'The Plug Co',
    id: 'the-plug',
    period: 'September – December 2025 · May – August 2026',
    context: 'AI systems, embedded-device prototyping and system architecture.',
    bullets: [
      'Prototyped early VR hardware concepts with STM32 microcontrollers and breadboards to explore sensor integration, device I/O and hardware-software interaction.',
      'Evaluated custom-hardware feasibility and helped shift development toward compatibility with existing Meta and commercial VR devices to shorten development time.',
      'Designed the end-to-end logic for capturing, synchronizing and structuring camera, audio, motion and user-interaction data for AI processing and searchable memories.',
      'Developed Python and TypeScript components to process device data, validate inputs and connect collected events with backend and AI-driven application features.',
    ],
    skills: [
      'Python', 'TypeScript', 'C++', 'AI Systems', 'Embedded Devices', 'System Architecture',
    ],
  },
  {
    role: 'Software Engineer Intern',
    id: 'coinwa',
    context: 'A mobile app that teaches teenagers budgeting and saving.',
    organization: 'CoinWa',
    period: 'January 2025 – April 2025',
    bullets: [
      'Developed Flutter interfaces for interactive budgeting and saving modules across multiple mobile screen sizes.',
      'Implemented Node.js and MongoDB services for authentication, user accounts and learning-progress persistence.',
      'Improved application reliability by debugging rendering and performance issues with Flutter DevTools and end-to-end feature testing.',
    ],
    skills: [
      'Flutter',
      'Dart',
      'Node.js',
      'MongoDB',
      'REST APIs',
    ],
  },
  {
    role: 'Software Engineering Intern',
    id: 'western',
    context: 'A Java tool for assigning instructors to courses.',
    organization: 'Western University',
    period: 'February 2023 – June 2023',
    bullets: [
      'Developed a Java allocation system that matched instructors to courses by qualifications and availability, improving scheduling efficiency by approximately 80%.',
      'Refined requirements with departmental staff, documented application workflows and trained users to support continued deployment.',
    ],
    skills: [
      'Java',
      'Requirements Analysis',
      'Technical Documentation',
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
      'Designed a pedal-driven drum and two-ratio chain drivetrain in SolidWorks.',
      'Sized shafts and transmission components using torque and fatigue analysis.',
    ],
    technologies: [
      'SolidWorks',
      'Mechanical Design',
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
    title: 'OEM Wireless CarPlay Integration — 2016 Acura ILX',
    summary:
      'I’m working on adding wireless CarPlay to my 2016 Acura ILX while keeping its two factory screens, steering-wheel controls and backup camera.',
    bullets: [
      'Designed an embedded architecture that retains the factory displays, controls and backup-camera functionality.',
      'Defined signal-measurement, video-switching and fail-safe requirements so the factory system can take over during hardware faults.',
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
    title: 'Armada — Real-Time Convoy Navigation Platform',
    summary:
      'A mobile-first platform for planning routes and coordinating drivers in a convoy.',
    bullets: [
      'Developed authentication, live locations, route visualization and synchronized driver profiles.',
      'Integrated geolocation, mapping and persistent cloud data to support real-time coordination across multiple connected users.',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'Firebase',
    ],
    visual: {
      type: 'system',
      label: 'Live convoy system',
      nodes: ['Route', 'Convoy', 'Nearby', 'Profile'],
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
    title: 'Languages',
    skills: [
      'C',
      'C++',
      'Python',
      'TypeScript',
      'JavaScript',
      'Java',
      'MATLAB',
      'Dart',
    ],
  },
  {
    title: 'Embedded & robotics',
    skills: [
      'STM32',
      'ESP32',
      'ARM Cortex-M',
      'FreeRTOS',
      'UART',
      'SPI',
      'I²C',
      'CAN',
      'PWM',
      'ADC/DAC',
      'Sensors',
      'PID',
    ],
  },
  {
    title: 'Software & tools',
    skills: [
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'Flutter',
      'MongoDB',
      'Firebase',
      'Supabase',
      'Git',
      'SolidWorks',
      'KiCad',
      'Oscilloscopes',
      'Logic Analyzers',
    ],
  },
];

export const education: Education = {
  institution: 'University of Waterloo',
  degree:
    'Candidate for Bachelor of Applied Science in Honours Mechatronics Engineering',
  period: 'September 2023 – April 2028 (expected)',
  coursework: [
    'Microprocessor Systems & Interfacing',
    'Computer Structures & Real-Time Systems',
    'Sensors & Instrumentation',
    'Actuators & Power Electronics',
    'Automatic Control Systems',
    'Algorithms & Data Structures',
  ],
};
