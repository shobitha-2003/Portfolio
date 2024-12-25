import Navbar from "./components/Navbar";
import Heroin from "./components/Heroin";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import { useState } from "react";

const App = () => {
  const [currentSection, setCurrentSection] = useState("home");

  // Function to smoothly scroll to a section by ID and update the current section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(id); // Update the current section
    }
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Styling */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%80%_at_50%-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar currentSection={currentSection} />
        <div className="container mx-auto px-8 pt-20">
          <div id="home" className="min-h-screen">
            <Heroin scrollToSection={scrollToSection} />
          </div>
          <div id="technologies" className="min-h-screen">
            <Technologies scrollToSection={scrollToSection} />
          </div>
          <div id="experience" className="min-h-screen">
            <Experience scrollToSection={scrollToSection} />
          </div>
          <div id="projects" className="min-h-screen">
            <Projects scrollToSection={scrollToSection} />
          </div>
          <div id="contact" className="min-h-screen">
            <ContactMe scrollToSection={scrollToSection} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
