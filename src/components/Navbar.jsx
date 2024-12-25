import { useState } from "react";
import logo from "../assets/logoofname.png"; // Importing your logo

const Navbar = ({ currentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to smoothly scroll to a section by ID
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-20 w-full bg-transparent">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left Section: Logo (Only on Home page) */}
        <div className="flex items-center">
          {currentSection === "home" && (
            <img className="w-14 ml-10" src={logo} alt="Logo" />
          )}
        </div>

        {/* Right Section: Navigation Buttons */}
        <div className="hidden md:flex gap-6 text-lg">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-cyan-400 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("technologies")}
            className="hover:text-cyan-400 transition-colors"
          >
            Technologies
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="hover:text-cyan-400 transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-cyan-400 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-cyan-400 transition-colors"
          >
            Contact Me
          </button>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-neutral-300 hover:text-cyan-400"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-neutral-950 bg-opacity-90 text-lg flex flex-col items-center gap-4 py-4">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("technologies")}>
            Technologies
          </button>
          <button onClick={() => scrollToSection("experience")}>
            Experience
          </button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("contact")}>Contact Me</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
