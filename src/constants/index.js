export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  
];
 // Technology icon paths for use in project
  export const techIcons = {
    mongodb: 'assets/icons/mongodb.png',
    postgresql: 'assets/icons/postgresql.png',
    python: 'assets/icons/python.png',
    scikitlearn: 'assets/icons/scikit-learn.png',
    nextjs: 'assets/icons/nextjs.png',
    docker: 'assets/icons/docker.png',
    reactthreefiber: 'assets/icons/react-three-fiber.png',
    react: 'assets/icons/react.png',
    tailwind: 'assets/icons/tailwind.png',
  };

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Training and Placement (TNP) Website',
    desc: 'The official Training and Placement website centralizes all placement activities—company visits, drives, eligibility, schedules, and results—providing students with real-time updates and seamless registration.',
    subdesc:
      'As part of the TNP team I maintained and managed the site for 5,000+ students, ensuring timely, accurate information flow. Authorized coordinators can securely post and update notices while students register for drives and view announcements via a streamlined interface that improves transparency and communication.',
    duration: 'Nov 2025 – Present',
    href: 'https://www.tnpgndec.com/',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9J13lb7mhmCzcO02FMQElQnvgvAsHkDYpTg&s',
    texture: '/assets/projects/tnp.png',
    spotlight: '/assets/spotlight2.png',
    logoStyle: {
      backgroundColor: '#0B1B2B',
      border: '0.2px solid #122530',
      boxShadow: '0px 0px 40px 0px #1E90FF33',
    },
    tags: [
      { id: 1, name: 'React', path: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
      { id: 2, name: 'Node.js', path: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/nodejs-icon-svg-download-png-9632853.png' },
      { id: 3, name: 'MongoDB', path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&s' },
     
    ],
  },
  {
    title: 'InfoCascade',
    desc: 'A centralized digital notice board for GNDEC delivering real-time academic and institutional updates—exams, results, fees, events, and official announcements.',
    subdesc:
      'Built to scale with an active user base of 800+ students, InfoCascade ensures critical notices reach the campus reliably. The platform focuses on a simple, user-friendly experience for both admins and students.',
    duration: 'Oct 2025 – Present',
    href: 'https://infocascade.onrender.com/',
    logo: 'https://infocascade.onrender.com/images/Infocascade.png',
    texture: '/assets/projects/infocascade.png',
    spotlight: '/assets/spotlight2.png',
    logoStyle: {
      backgroundColor: '#071527',
      border: '0.2px solid #0E2A3B',
      boxShadow: '0px 0px 40px 0px #00B7FF33',
    },
    tags: [
      { id: 1, name: 'Next.js', path: 'https://files.raycast.com/4l8sj9rclkbbd6swwq6s1cuidn6b' },
      { id: 2, name: 'TailwindCSS', path: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
        { id: 3, name: 'MongoDB', path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&s' },
   
    ],
  },
  {
    title: 'TyperHouse 0.2 (Phase 2)',
    desc: 'TyperHouse 0.2 introduces ML-powered typing insights, predictive mistake recommendations, and a refreshed domain/UI at typerhouse.tech.',
    subdesc:
      'ML analyzes recent typing patterns to predict the next 5 likely mistakes, helping users improve accuracy proactively. Group mode, enhanced UI, and scalable deployment make training and competing seamless.',
    duration: 'Nov 2025 – Feb 2026',
    href: 'https://typerhouse.tech/',
    logo: 'https://www.typerhouse.tech/_next/image?url=%2Flogo%2FLogo.png&w=32&q=75',
    texture: '/assets/projects/typerhouse.png',
     spotlight: '/assets/spotlight2.png',
    logoStyle: {
      backgroundColor: '#071527',
      border: '0.2px solid #0E2A3B',
      boxShadow: '0px 0px 40px 0px #00B7FF33',
    },
    tags: [
      { id: 1, name: 'Next.js', path: 'https://files.raycast.com/4l8sj9rclkbbd6swwq6s1cuidn6b' },
      { id: 2, name: 'React Three Fiber', path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s' },
      { id: 3, name: 'MongoDB', path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&s' },
      { id: 4, name: 'Python (ML)', path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1280px-Python-logo-notext.svg.png' },
      { id: 5, name: 'Docker', path: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png' },
    ],
  },
  {
    title: 'TyperHouse (Phase 1)',
    desc: 'First live phase of TyperHouse: a full-stack real-time multiplayer typing game with room creation, Google auth, live WPM tracking, and auto-start when players join.',
    subdesc:
      'Core features include Google authentication (NextAuth), room creation and join codes, dynamic paragraph generation, real-time WPM updates, and visual feedback for incorrect words.',
    duration: 'Jun 2025 – Oct 2025',
    href: 'https://typerhouse.tech',
    logo: 'https://www.typerhouse.tech/_next/image?url=%2Flogo%2FLogo.png&w=32&q=75',
    texture: '/assets/projects/typerhouse.png',
    spotlight: '/assets/spotlight2.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    tags: [
     { id: 1, name: 'Next.js', path: 'https://files.raycast.com/4l8sj9rclkbbd6swwq6s1cuidn6b' },
      { id: 2, name: 'NextAuth', path: 'https://next-auth.js.org/img/logo/logo-sm.png' },
      { id: 3, name: 'Socket.IO', path: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg' },
      { id: 4, name: 'TailwindCSS', path: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Padmas Technologies',
    pos: 'Business Development Executive Intern',
    duration: 'March 2026 - July 2026',
    title: 'Worked at the intersection of software development and business strategy, gaining hands-on experience in client relationship management, business development, software requirement analysis, project estimation, and software pricing models. Collaborated with technical teams to understand product development lifecycles while learning how technology solutions are positioned, proposed, and delivered to clients.',
    icon: 'https://padmastechnologies.com/_next/image?url=%2Fassets%2Fimages%2FPadmas-tm-logo-blue.png&w=3840&q=75',
    animation: 'victory',
  },
   {
    id: 2,
    name: 'Training and Placement Cell, GNDEC, Ludhiana',
    pos: 'Software Er.',
    duration: 'Nov 2025- Present',
    title: "Currently working as a Software Engineer at the Training and Placement Cell of GNDEC, Ludhiana. In this role, I am responsible for developing and maintaining software solutions that support the placement activities of the institution. I collaborate with a team to create efficient systems for managing student placements, employer interactions, and data analytics. This experience has allowed me to enhance my technical skills while contributing to the success of the placement cell.",
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9J13lb7mhmCzcO02FMQElQnvgvAsHkDYpTg&s',
    animation: 'victory',
  },
  {
    id: 3,
    name: 'Mohey Innovations',
    pos: 'Software Er.',
    duration: 'Nov 2024 - Aug 2025',
    title: "Worked at a startup where I gained hands-on experience in managing various aspects of a project. Handled both frontend and backend development, along with deployment responsibilities.",
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6XQky7hNYwbp8bQ30RLNzc3riPqosYKKRw&s',
    animation: 'victory',
  },
  {
    id: 4,
    name: 'RD group of Industries',
    pos: 'Software Er.',
    duration: 'Jul 2024 - Sep 2024',
    title: "Gained full-stack development experience while working under tight deadlines. Learned to collaborate effectively with a team and improved my communication skills in a professional environment.",
    icon: 'https://media.licdn.com/dms/image/v2/C560BAQHQ-yCD-LnPhw/company-logo_200_200/company-logo_200_200/0/1630669708377?e=2147483647&v=beta&t=cB4g93R3CQSsKiMCogwDl33QsL0Mp6fhxLZUd9x6b3U',
    animation: 'clapping',
  },
  {
    id: 4,
    name: 'Voltsec.io',
    pos: 'Junior Software Er.',
    duration: 'Apr 2024 - Jul 2024',
    title: "At Voltsec.io, I improved my organizational skills by managing projects, tracking tasks, and maintaining centralized documentation. Gained exposure to team workflows and agile methodologies.",
    icon: 'https://avatars.githubusercontent.com/u/105448433?s=280&v=4',
    animation: 'salute',
  },
];

 