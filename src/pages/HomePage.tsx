import About from "../components/About";
import Contact from "../components/Contact";
import ContactPopup from "../components/ContactPopup";
import Hero from "../components/Hero";
// import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import { Element } from "react-scroll";
import type { Dispatch, SetStateAction } from "react";

type HomePageProps = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  openModal: boolean;
};

const HomePage = ({ setOpenModal, openModal }: HomePageProps) => {
  return (
    <div className="Home">
      {openModal && <ContactPopup setOpenModal={setOpenModal} />}
      <Element name="hero">
        <Hero setOpenModal={setOpenModal} />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default HomePage;
