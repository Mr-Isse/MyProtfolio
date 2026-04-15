// Personal Information
export const personalInfo = {
  name: "Asad Isse",
  title: "Full Stack & Frontend Developer",
  location: "Somalia",
  email: "asad.isse@example.com",
  github: "https://github.com/Mr-Isse",
  linkedin: "https://www.linkedin.com/in/asad-isse-a81573402/",
  whatsapp: "+252610729128",
  bio: "Passionate software engineer with a strong focus on building scalable web and mobile applications. I specialize in React, Node.js, and modern JavaScript technologies. With a dedication to clean code and exceptional user experiences, I transform ideas into powerful digital solutions.",
}

// Skills Data
export const skills = [
  { name: "React", level: 90, icon: "FaReact", color: "#61DAFB" },
  { name: "JavaScript", level: 95, icon: "FaJs", color: "#F7DF1E" },
  { name: "TypeScript", level: 85, icon: "FaJsSquare", color: "#3178C6" },
  { name: "Tailwind CSS", level: 92, icon: "FaCss3Alt", color: "#06B6D4" },
  { name: "Node.js", level: 80, icon: "FaNodeJs", color: "#339933" },
  { name: "MongoDB", level: 75, icon: "FaDatabase", color: "#47A248" },
  { name: "Express", level: 78, icon: "FaServer", color: "#FFFFFF" },
  { name: "React Native", level: 82, icon: "FaReact", color: "#61DAFB" },
  { name: "Firebase", level: 77, icon: "FaFire", color: "#FFCA28" },
  { name: "Git/GitHub", level: 88, icon: "FaGitAlt", color: "#F05032" },
  // New skills
  { name: "PHP", level: 70, icon: "FaPhp", color: "#777BB4" },
  { name: "Python", level: 75, icon: "FaPython", color: "#3776AB" },
  { name: "C#", level: 65, icon: "FaCode", color: "#9B4F96" },
  { name: "Java", level: 70, icon: "FaJava", color: "#007396" },
  { name: "HTML", level: 95, icon: "FaHtml5", color: "#E34F26" },
  { name: "CSS", level: 92, icon: "FaCss3Alt", color: "#1572B6" },
  { name: "jQuery", level: 80, icon: "FaCode", color: "#0769AD" },
  { name: "AJAX", level: 78, icon: "FaExchangeAlt", color: "#6C757D" },
  { name: "Bootstrap", level: 90, icon: "FaBootstrap", color: "#7952B3" },
];

// Projects Data
export const projects = [
  {
    id: 1,
    title: "School System Management",
    description: "A comprehensive school management system with student tracking, grade management, attendance monitoring, and administrative dashboard. Built with modern web technologies for optimal performance.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with product catalog, shopping cart, payment integration, and admin panel. Features real-time inventory management and order tracking.",
    tech: ["React", "Tailwind CSS", "Firebase", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities. Mobile-responsive design.",
    tech: ["React Native", "Firebase", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website with smooth animations, dark theme, and glassmorphism design. Showcases projects and skills with premium UI/UX.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    featured: false,
  },
]

// Experience / Education Timeline
export const experience = [
  {
    id: 1,
    year: "2024 - Present",
    title: "Software Engineer",
    organization: "Freelance / Personal Projects",
    description: "Developing scalable web and mobile applications. Working with React, Node.js, and modern tech stacks to deliver high-quality solutions for clients.",
    icon: "FaCode",
  },
  {
    id: 2,
    year: "2024",
    title: "School System Management Project",
    organization: "Major Project",
    description: "Led the development of a comprehensive school management system. Implemented features for student tracking, grade management, and administrative controls.",
    icon: "FaSchool",
  },
  {
    id: 3,
    year: "2023 - 2024",
    title: "Learning React Native",
    organization: "Self-Directed Learning",
    description: "Mastered React Native for cross-platform mobile development. Built multiple mobile applications with native performance and modern UI patterns.",
    icon: "FaMobileAlt",
  },
  {
    id: 4,
    year: "2023",
    title: "Full Stack Development",
    organization: "Professional Development",
    description: "Expanded expertise in full-stack development with Node.js, MongoDB, and Express. Built RESTful APIs and integrated third-party services.",
    icon: "FaLaptopCode",
  },
]

// Stats
export const stats = [
  { label: "Years Experience", value: "2+", icon: "FaCalendarAlt" },
  { label: "Projects Completed", value: "10+", icon: "FaProjectDiagram" },
  { label: "Technologies", value: "15+", icon: "FaLayerGroup" },
  { label: "Happy Clients", value: "5+", icon: "FaUsers" },
]

// Navigation Links
export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]
