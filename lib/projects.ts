export type ProjectStatus = "live" | "in-progress" | "notebook";

export interface Project {
  title: string | { en: string; de: string };
  desc?: { en: string; de: string };
  caseStudy?: {
    problem: { en: string; de: string };
    solution: { en: string; de: string };
    tech: { en: string; de: string };
    result: { en: string; de: string };
  };
  tags?: string[];
  github?: string;
  notebook?: string;
  demo?: string;
  image?: string;
  status?: ProjectStatus;
  featured?: boolean;
  placeholder?: boolean;
}

export const projects: Project[] = [
  {
    title: "LangGraph AI Chatbot",
    desc: {
      en: "LLM-based agent system using LangGraph with tool integrations (APIs, calculator) and persistent memory (SQLite). Thread-based chat system with context preservation and SQLite checkpointing for persistent conversation memory.",
      de: "LLM-basiertes Agentensystem mit LangGraph, Tool-Integrationen (APIs, Taschenrechner) und persistentem Speicher (SQLite). Thread-basiertes Chat-System mit Kontexterhaltung und SQLite-Checkpointing.",
    },
    tags: [
      "Python",
      "LangGraph",
      "LangChain",
      "Streamlit",
      "SQLite",
      "AI Agents",
    ],
    caseStudy: {
      problem: {
        en: "Users needed persistent, tool-aware AI conversations instead of one-off prompts.",
        de: "Nutzer brauchten persistente, tool-fähige KI-Konversationen statt einzelner Prompts.",
      },
      solution: {
        en: "Built a LangGraph agent with tool routing, SQLite memory, and thread checkpoints.",
        de: "LangGraph-Agent mit Tool-Routing, SQLite-Memory und Thread-Checkpoints gebaut.",
      },
      tech: {
        en: "LangGraph, LangChain, Streamlit, SQLite, Python",
        de: "LangGraph, LangChain, Streamlit, SQLite, Python",
      },
      result: {
        en: "Reusable agent workflow with persistent context and live demo deployment.",
        de: "Wiederverwendbarer Agent-Workflow mit persistentem Kontext und Live-Demo.",
      },
    },
    github: "#",
    demo: "https://langraph-chatbot-demo.streamlit.app",
    image: "/Images/projects/TravelPublishingPlatform.png",
    status: "live",
    featured: true,
  },
  {
    title: "Sentiment Analyzer",
    desc: {
      en: "Sentiment analysis web application built with Django and scikit-learn. Integrated Chart.js for results visualization and real-time sentiment predictions.",
      de: "Sentimentanalyse-Webanwendung mit Django und scikit-learn. Integrierte Chart.js zur Visualisierung von Ergebnissen und Echtzeit-Sentimentvorhersagen.",
    },
    tags: ["Django", "Scikit-learn", "Chart.js", "Python", "NLP"],
    caseStudy: {
      problem: {
        en: "Raw feedback needed fast classification and a clear view of sentiment trends.",
        de: "Rohes Feedback brauchte schnelle Klassifikation und klare Sentiment-Trends.",
      },
      solution: {
        en: "Created a Django app that predicts sentiment and visualizes results in real time.",
        de: "Django-App erstellt, die Sentiment vorhersagt und Ergebnisse live visualisiert.",
      },
      tech: {
        en: "Django, scikit-learn, Chart.js, Python, NLP",
        de: "Django, scikit-learn, Chart.js, Python, NLP",
      },
      result: {
        en: "Simple analysis workflow for turning text input into interpretable decisions.",
        de: "Einfacher Analyse-Workflow für interpretierbare Entscheidungen aus Texteingaben.",
      },
    },
    github: "#",
    demo: "https://sentiment-analyzer-demo.herokuapp.com",
    status: "live",
    featured: true,
  },
  {
    title: "Handwritten Digit Generation (GAN)",
    desc: {
      en: "Generative Adversarial Network to generate handwritten digits from MNIST dataset using deep neural networks. Demonstrates adversarial training and image generation.",
      de: "Generatives adversariales Netzwerk zur Generierung handgeschriebener Ziffern aus dem MNIST-Datensatz. Demonstriert adversariales Training und Bildgenerierung.",
    },
    tags: ["Python", "PyTorch", "GAN", "Deep Learning", "MNIST"],
    github: "#",
    notebook: "https://colab.research.google.com",
    status: "live",
    featured: true,
  },
  {
    title: "Portfolio Website",
    desc: {
      en: "Responsive portfolio website showcasing projects and experience. Built with React, Next.js, and SASS with smooth animations and modern design.",
      de: "Responsive Portfolio-Website mit Projekten und Erfahrungen. Entwickelt mit React, Next.js und SASS mit sanften Animationen und modernem Design.",
    },
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive"],
    github: "#",
    demo: "https://portfolio-nishchal.vercel.app",
    status: "live",
  },
  {
    title: "Django Blog Platform",
    desc: {
      en: "Online blogging platform developed with Django and jQuery. Features include user authentication, database operations, and dynamic content management.",
      de: "Online-Blog-Plattform mit Django und jQuery. Funktionen umfassen Benutzerauthentifizierung, Datenbankoperationen und dynamische Inhaltsverwaltung.",
    },
    tags: ["Django", "jQuery", "Python", "Database", "Web Development"],
    github: "#",
    demo: "https://blog-platform-demo.herokuapp.com",
    status: "live",
  },
  {
    title: {
      en: "More projects on GitHub →",
      de: "Weitere Projekte auf GitHub →",
    },
    placeholder: true,
  },
];
