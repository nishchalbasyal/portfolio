export type SkillStatus = "strong" | "inProgress" | "planned";

export interface Skill {
  name: string;
  pct: number;
  status: SkillStatus;
}

export interface SkillCategory {
  icon: string;
  title: { en: string; de: string };
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    icon: "🤖",
    title: { en: "AI & Agents", de: "KI & Agenten" },
    skills: [
      { name: "AI Agents", pct: 95, status: "strong" },
      { name: "LangGraph", pct: 70, status: "inProgress" },
      { name: "LangSmith", pct: 60, status: "inProgress" },
      { name: "Bedrock", pct: 5, status: "planned" },
    ],
  },
  {
    icon: "⚡",
    title: { en: "Automation", de: "Automatisierung" },
    skills: [
      { name: "N8N", pct: 90, status: "strong" },
      { name: "REST APIs", pct: 95, status: "strong" },
      { name: "Flask", pct: 90, status: "strong" },
      { name: "MCP Servers", pct: 5, status: "planned" },
    ],
  },
  {
    icon: "🧠",
    title: { en: "ML & Data", de: "ML & Daten" },
    skills: [
      { name: "Python", pct: 94, status: "strong" },
      { name: "PyTorch", pct: 70, status: "inProgress" },
      { name: "ML/DL", pct: 90, status: "strong" },
      { name: "NLP", pct: 80, status: "strong" },
      { name: "CV / YOLO", pct: 75, status: "strong" },
      { name: "SageMaker", pct: 5, status: "planned" },
    ],
  },
  {
    icon: "☁️",
    title: { en: "DevOps & Cloud", de: "DevOps & Cloud" },
    skills: [
      { name: "Docker", pct: 50, status: "inProgress" },
      { name: "AWS (CCP)", pct: 10, status: "planned" },
      { name: "Kubernetes", pct: 5, status: "planned" },
      { name: "Terraform", pct: 5, status: "planned" },
      { name: "Jenkins", pct: 5, status: "planned" },
    ],
  },
  {
    icon: "💻",
    title: { en: "Languages & Tools", de: "Sprachen & Tools" },
    skills: [
      { name: "Python", pct: 94, status: "strong" },
      { name: "JavaScript", pct: 85, status: "strong" },
      { name: "Linux/Bash", pct: 70, status: "strong" },
      { name: "Git", pct: 85, status: "strong" },
    ],
  },
];

// Graph Node System for Skills visualization
export type NodeStatus = "strong" | "inProgress" | "planned";

export interface GraphNode {
  id: string;
  layer: "input" | "core" | "output";
  icon: string;
  label: string;
  desc: { en: string; de: string };
  status: NodeStatus;
  connects: string[];
}

export const graphNodes: GraphNode[] = [
  // LAYER 1 — INPUT
  {
    id: "user-input",
    layer: "input",
    icon: "👤",
    status: "strong",
    label: "User Input",
    desc: {
      en: "Prompts, triggers, webhooks",
      de: "Prompts, Trigger, Webhooks",
    },
    connects: ["langgraph", "llm"],
  },
  {
    id: "apis",
    layer: "input",
    icon: "🔌",
    status: "strong",
    label: "External APIs",
    desc: { en: "REST / webhook sources", de: "REST / Webhook-Quellen" },
    connects: ["langgraph", "memory"],
  },
  {
    id: "webhooks",
    layer: "input",
    icon: "⚡",
    status: "strong",
    label: "N8N Triggers",
    desc: {
      en: "Event-driven automation entry",
      de: "Ereignisgesteuerte Automatisierung",
    },
    connects: ["planner"],
  },

  // LAYER 2 — AI CORE
  {
    id: "langgraph",
    layer: "core",
    icon: "🧠",
    status: "inProgress",
    label: "LangGraph Agent",
    desc: {
      en: "Multi-agent reasoning system",
      de: "Multi-Agenten-Reasoning-System",
    },
    connects: ["n8n", "cloud", "rest-out"],
  },
  {
    id: "llm",
    layer: "core",
    icon: "🤖",
    status: "strong",
    label: "LLM Layer",
    desc: { en: "OpenAI / LLaMA backbone", de: "OpenAI / LLaMA Backbone" },
    connects: ["langgraph", "planner"],
  },
  {
    id: "memory",
    layer: "core",
    icon: "💾",
    status: "inProgress",
    label: "Memory System",
    desc: { en: "Vector store & context", de: "Vektorspeicher & Kontext" },
    connects: ["langgraph"],
  },
  {
    id: "planner",
    layer: "core",
    icon: "📋",
    status: "strong",
    label: "Planner Agent",
    desc: {
      en: "Task decomposition & routing",
      de: "Aufgabenzerlegung & Routing",
    },
    connects: ["n8n", "rest-out"],
  },

  // LAYER 3 — OUTPUT
  {
    id: "rest-out",
    layer: "output",
    icon: "📡",
    status: "strong",
    label: "REST APIs",
    desc: {
      en: "Flask / FastAPI endpoints",
      de: "Flask / FastAPI Endpunkte",
    },
    connects: [],
  },
  {
    id: "n8n",
    layer: "output",
    icon: "⚙️",
    status: "strong",
    label: "N8N Workflows",
    desc: {
      en: "Automation pipeline output",
      de: "Automatisierungs-Pipeline-Ausgabe",
    },
    connects: [],
  },
  {
    id: "cloud",
    layer: "output",
    icon: "☁️",
    status: "planned",
    label: "Cloud Deploy",
    desc: { en: "AWS / Docker / K8s", de: "AWS / Docker / K8s" },
    connects: [],
  },
  {
    id: "notify",
    layer: "output",
    icon: "🔔",
    status: "strong",
    label: "Notifications",
    desc: {
      en: "Slack / Email / Webhooks out",
      de: "Slack / E-Mail / Webhooks",
    },
    connects: [],
  },
];
