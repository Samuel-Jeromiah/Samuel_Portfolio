export const resume = {
  basics: {
    name: "Samuel Jeromiah",
    role: "Machine Learning Engineer",
    headline:
      "I build and deploy machine learning systems — from data and feature engineering to model training and production-ready apps — with a focus on measurable accuracy, reliability, and usability.",
    location: "Boston, MA • Chennai, India",
    email: "jeromiah.s@northeastern.edu",
    photoSrc: "/profile-placeholder.svg",
    links: {
      linkedin: "https://linkedin.com/in/samuel30",
      github: "https://github.com/LuminarySam30",
      website: "https://jeromiahs.sites.northeastern.edu/",
    },
    availability: "Open to full-time roles • Remote / Hybrid",
  },

  about: {
    title: "About",
    paragraphs: [
      "I’m a Machine Learning Engineer and M.S. Artificial Intelligence student at Northeastern University (Khoury College of Computer Sciences). I enjoy building practical ML solutions that are accurate, explainable, and easy to use.",
      "My work spans tabular ML (fraud detection), NLP (healthcare sentiment), and IoT/embedded systems for assistive tech. I’m especially interested in strong evaluation, feature engineering, and turning models into reliable products.",
    ],
    highlights: [
      "End-to-end ML: data → features → training → evaluation → deployment",
      "Building user-facing ML apps (Streamlit/Flask) with clear UX",
      "Strong fundamentals in algorithms + applied ML engineering",
    ],
  },

  experience: {
    title: "Experience",
    items: [
      {
        title: "Software Development Intern",
        company: "InterPe",
        location: "Chennai, India",
        start: "Jul 2022",
        end: "Aug 2022",
        bullets: [
          "Improved maintainability and reduced debugging time by applying systematic code reviews and object-oriented design across 5 Java applications, collaborating in weekly scrum meetings.",
          "Delivered features and fixes on schedule by working with a 6-member cross-functional team to troubleshoot issues and ensure smooth integration.",
        ],
        tech: ["Java", "OOP", "Code Review", "Scrum"],
      },
      {
        title: "IT Operations & Data Systems Intern",
        company: "Nuray Chemicals Private Limited",
        location: "Chennai, India",
        start: "Jul 2023",
        end: "Aug 2023",
        bullets: [
          "Designed, configured, and deployed environmental monitoring systems with LAN connectivity to automate data logging and server storage for pharmaceutical operations.",
          "Calibrated analytical instruments and resolved logging failures to ensure accurate real-time quality control data transmission.",
        ],
        tech: ["Networking", "Systems", "Monitoring", "Troubleshooting"],
      },
      {
        title: "Data Networking Intern",
        company: "BSNL (Bharat Sanchar Nigam Limited)",
        location: "Chennai, India",
        start: "Jul 2024",
        end: "Aug 2024",
        bullets: [
          "Diagnosed and resolved 15 network connectivity issues affecting data transmission speeds, improving efficiency by 8% across telecom channels.",
          "Analyzed and optimized network infrastructure configurations supporting telecom operations to improve system reliability.",
        ],
        tech: ["Networking", "Diagnostics", "Infrastructure"],
      },
    ],
  },

  projects: {
    title: "Selected Projects",
    items: [
      {
        name: "Credit Card Fraud Detection System",
        description:
          "Built a high-performance fraud detection pipeline with an interactive dashboard for real-time predictions and risk insights.",
        highlights: [
          "Engineered an XGBoost classifier achieving 99.6% accuracy and 88.02% recall on 1.3M+ transactions using 31 custom features and SMOTE for severe class imbalance.",
          "Deployed an interactive Streamlit app with explainable AI reasoning, risk visualizations, and automated alerts for transaction monitoring.",
        ],
        tech: ["Python", "XGBoost", "scikit-learn", "SMOTE", "Streamlit", "Feature Engineering"],
        links: {
          demo: "",
          repo: "",
        },
      },
      {
        name: "Patient Sentiment & Adverse Effect Analysis",
        description:
          "NLP healthcare application that analyzes patient reviews and summarizes drug information for faster, data-driven decision making.",
        highlights: [
          "Processed 10,000+ patient reviews using Flask, Python, and MongoDB; added visualizations, text-to-speech, and web scraping from drugs.com.",
          "Achieved 85% sentiment classification accuracy (positive/negative) and automatically summarized drug descriptions and adverse effects.",
        ],
        tech: ["Python", "NLP", "Flask", "MongoDB", "Web Scraping"],
        links: { demo: "", repo: "" },
      },
      {
        name: "Smart Blind Navigation Kit",
        description:
          "Assistive IoT system for obstacle detection and safer navigation for visually impaired users.",
        highlights: [
          "Won 1st Prize at National Science Day Expo by redesigning a navigation prototype into a clip-on wearable integrating Arduino Nano, Raspberry Pi, and ultrasonic sensors.",
          "Built a GPS-enabled mobile app for real-time location monitoring and route guidance to improve navigation safety.",
        ],
        tech: ["Arduino", "Raspberry Pi", "IoT", "Sensors"],
        links: { demo: "", repo: "" },
      },
      {
        name: "Employee Management System",
        description:
          "Full-stack CRUD web application for managing employee data with a clean, responsive UI.",
        highlights: [
          "Implemented Spring Boot REST APIs with Spring Data JPA, custom exception handling, and CORS configuration for robust employee data management.",
          "Built an Angular SPA with Bootstrap and RxJS, dynamic routing, and HTTP services for smooth real-time updates.",
        ],
        tech: ["Spring Boot", "Spring Data JPA", "Angular", "Bootstrap", "RxJS"],
        links: { demo: "", repo: "" },
      },
    ],
  },

  skills: {
    title: "Skills",
    groups: [
      {
        label: "AI/ML",
        items: [
          "Machine Learning",
          "Deep Learning",
          "NLP",
          "Computer Vision",
          "Reinforcement Learning",
          "XGBoost",
          "scikit-learn",
          "Feature Engineering",
          "Model Optimization",
          "RAG",
          "LangChain",
          "LangGraph",
        ],
      },
      {
        label: "Languages",
        items: ["Python", "SQL", "Java", "JavaScript", "TypeScript", "C", "HTML", "CSS"],
      },
      {
        label: "Frameworks",
        items: ["Flask", "Streamlit", "TensorFlow", "PyTorch", "Spring Boot", "Angular"],
      },
      {
        label: "Data Science",
        items: [
          "Pandas",
          "NumPy",
          "Matplotlib",
          "Seaborn",
          "Data Preprocessing",
          "Statistical Analysis",
          "SMOTE",
        ],
      },
      { label: "Databases", items: ["MySQL", "MongoDB", "Database Design", "JPA/Hibernate (ORM)"] },
      { label: "Tools", items: ["Git/GitHub", "Jupyter Notebook", "REST APIs", "Arduino", "Raspberry Pi", "IoT Systems"] },
      {
        label: "Certifications",
        items: [
          "Computer Vision",
          "Data Science",
          "Robotic Process Automation & IoT Foundation (Infosys)",
        ],
      },
    ],
  },

  education: {
    title: "Education",
    items: [
      {
        degree: "Master of Science in Artificial Intelligence",
        school: "Northeastern University — Khoury College of Computer Sciences",
        location: "",
        start: "",
        end: "",
        details: [
          "GPA: 4.0",
          "Related courses: Foundations of A.I, Algorithms, Programming Design Paradigm, Machine Learning",
        ],
      },
      {
        degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
        school: "Anna University",
        location: "",
        start: "",
        end: "2025",
        details: [
          "GPA: 3.2",
          "Related courses: Reinforcement Learning, Natural Language Processing, Deep Learning Techniques",
        ],
      },
    ],
  },

  contact: {
    title: "Contact",
    blurb:
      "Have a role or project in mind? Email me and I’ll reply within 24–48 hours.",
  },
};

