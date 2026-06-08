import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import TechStack from "./sections/TechStack";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

function App() {
  return (
    <div
      className="
        bg-slate-950
        text-white
        min-h-screen
        scroll-smooth
      "
    >
      <Navbar />

      <main>
        <Hero />

        <TechStack />

        <About />

        <Experience />

        <Skills />

        <Projects />

        <Certifications />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;