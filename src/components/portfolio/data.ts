export const LINKS = {
  github: "https://github.com/suwethakathir",
  linkedin: "https://www.linkedin.com/in/suwetha-kathiresan-1852b72a1/",
  email: "suwethakathir@gmail.com",
  phone: "+91 9345531710",
  paper: "https://ieeexplore.ieee.org/document/11019718",
  resume: "https://drive.google.com/file/d/1BGVpmWb8xzeEjDc3enitLbNOwRFtwtSs/view",
};

export const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "achievements", label: "Achievements" },
  { id: "leadership", label: "Leadership" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const EXPERIENCE = [
  {
    role: "Software Intern",
    org: "Infosys Springboard",
    period: "November 2025 – January 2026",
    points: [
      "Developed LLM-powered applications using Python, RAG, LangChain, LangGraph, Tavily Search, and API integrations.",
      "Developed an AI-powered web application using Python.",
    ],
  },
  {
    role: "Code for Good Hackathon",
    org: "J.P. Morgan Chase & Co.",
    period: "July 2025",
    points: [
      "Built a full-stack web application using React.js, Node.js, and MySQL within 24 hours with a team of 6.",
      "Integrated APIs and dashboards for NGO operations.",
      "Presented the solution to J.P. Morgan mentors.",
    ],
  },
  {
    role: "Data Analysis Intern",
    org: "NIT Trichy",
    period: "May 2025 – June 2025",
    points: [
      "Preprocessed and analyzed 10,000+ academic records using Python and Pandas.",
      "Created automated dashboards that reduced reporting time by 40%.",
      "Delivered insights contributing to two educational research initiatives.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "AI Powered Ingredient Detector for Allergies",
    featured: true,
    tech: ["Python", "Computer Vision", "HTML", "CSS", "JavaScript"],
    problem:
      "Packaged food labels are dense and hard to scan, making it easy for people with allergies to miss risky ingredients.",
    solution:
      "A real-time AI-powered system that reads ingredient labels and flags allergen information to improve food-safety awareness.",
    technology:
      "Real-time image processing with a machine learning pipeline for ingredient and allergen classification, served through a lightweight web interface.",
    impact:
      "Detection in less than 5 seconds, designed for practical healthcare and food-safety applications.",
    links: [{ label: "Research Paper", href: LINKS.paper }, { label: "View Project", href: LINKS.paper }],
  },
  {
    title: "Comparative Study of SELI and BOLL Models in Enhancing Student Learning Outcomes",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"],
    problem:
      "Institutions lack clarity on which learning-engagement model tracks student activity most reliably.",
    solution:
      "A comparative data analysis of the SELI and BOLL models across learning engagement and performance trends.",
    technology: "Python data pipeline with Pandas and NumPy, visual analysis in Matplotlib and Jupyter Notebook.",
    impact:
      "Analyzed 120+ student datasets and identified a 15% improvement in student activity tracking accuracy for SELI over BOLL.",
    links: [],
  },
  {
    title: "Autonomous Learning Agent using RAG, LangGraph and the Feynman Technique",
    tech: ["Python", "RAG", "LangChain", "LangGraph", "Tavily Search", "API Integrations"],
    problem:
      "Self-learners struggle to verify their own understanding of a topic without structured feedback.",
    solution:
      "An LLM-powered autonomous agent that explains topics using the Feynman technique and refines answers from retrieved sources.",
    technology:
      "Retrieval-Augmented Generation with LangChain and LangGraph orchestration, Tavily Search and external API integrations in Python.",
    impact: "Produces grounded, source-backed explanations through an iterative agent workflow.",
    links: [],
  },
];

export const ACHIEVEMENTS = [
  "Shortlisted for J.P. Morgan Chase Code for Good 2025 among top student developers in India.",
  "1st place – IEEE DAY 2025 Project Expo.",
  "1st place – Build2gether 24-hour Hackathon.",
  "Finalist – Hult Prize Nationals 2026; top 60 teams across India and ₹10,000 cash prize.",
  "NPTEL Topper – Top 5%, Elite + Silver Certificate in Python for Data Science.",
  "NPTEL Topper badges in more than four courses.",
  "20+ certifications across NPTEL, Coursera, LinkedIn Learning, Udemy, IIT Bombay, IIRS, and Learnathon.",
];

export const LEADERSHIP = [
  { role: "Team Manager", org: "Infosys Springboard Internship" },
  { role: "Team Leader", org: "J.P. Morgan Chase Code for Good 2025" },
  { role: "Team Leader", org: "Smart India Hackathon" },
  { role: "Project Leader", org: "IEEE Project Expo" },
  { role: "Volunteer Mentor", org: "National Digital Library of India Club" },
  { role: "Hackathon Team Leader", org: "Multiple technical competitions" },
];

export const LEADERSHIP_QUALITIES = [
  "Team coordination",
  "Cross-regional collaboration",
  "Mentoring",
  "Problem-solving",
  "Communication",
  "Project delivery under deadlines",
];

export const SKILLS = [
  { group: "Programming", items: ["Python", "JavaScript", "HTML", "CSS", "SQL", "Java (Basics)"] },
  { group: "Frameworks & Libraries", items: ["Django", "LangChain", "LangGraph", "React.js", "Node.js"] },
  { group: "AI/ML", items: ["Machine Learning", "Computer Vision", "NLP", "LLMs", "RAG"] },
  { group: "Databases", items: ["MySQL", "MongoDB"] },
  { group: "Tools", items: ["Git", "GitHub", "Jupyter Notebook", "Google Colab", "VS Code"] },
  {
    group: "Core",
    items: [
      "Software Engineering",
      "Full-Stack Development",
      "Data Analysis",
      "Object-Oriented Design",
      "Operating Systems",
      "Computer Networks",
      "Agile",
    ],
  },
];

export const INTERESTS = ["Software Engineering", "AI/ML", "Web Development", "RAG", "Healthcare"];

export const CERT_PROVIDERS = [
  "NPTEL",
  "Coursera",
  "LinkedIn Learning",
  "Udemy",
  "IIT Bombay",
  "IIRS",
  "Learnathon",
];
