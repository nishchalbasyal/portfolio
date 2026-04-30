export interface Testimonial {
  name: string;
  title: string;
  company?: string;
  relationship: string;
  date: string;
  content: string;
  image: string;
  linkedin: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Dr. Chhaya Patel",
    title: "AI/ML Professor | Researcher",
    company: "Universität Trier",
    relationship: "Mentor",
    date: "May 28, 2024",
    content:
      "I highly recommend Nishchal for his strong grasp of artificial intelligence and machine learning concepts. During his time as a student in my machine learning course, I was consistently impressed by his extraordinary skills like analytical thinking, problem-solving skills, and dedication to learning. I had the pleasure of guiding Nishchal through the research paper writing process. His final research paper on regression using XGBOOST regressor was well-written, insightful, demonstrated a clear understanding of the subject matter and is going to be published in a reputed journal.",
    image: "/Images/testimonals/chhayapatel.jpeg",
    linkedin: "https://www.linkedin.com/in/dr-chhaya-patel",
  },
  {
    name: "Dr. Shehrevar Davierwala",
    title: "Global Engagement & Strategy Adviser",
    company: "International Relations",
    relationship: "Direct Manager",
    date: "June 16, 2023",
    content:
      "He is good with Python, Java, and has experience working in MERN Stack. An hardworking individual with strong commitment to learning and delivering quality work.",
    image: "/Images/testimonals/dr_shehrevar.jpeg",
    linkedin: "https://www.linkedin.com/in/shehrevar-davierwala",
  },
];
