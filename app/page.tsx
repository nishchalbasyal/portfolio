import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CurrentlyBuilding } from "@/components/CurrentlyBuilding";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Publications } from "@/components/Publications";
import { Testimonials } from "@/components/Testimonials";
import { Roadmap } from "@/components/Roadmap";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <Navbar />
      <Hero />
      <CurrentlyBuilding />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Publications />
      <Testimonials />
      <Roadmap />
      <Contact />
      <Footer />
    </main>
  );
}
