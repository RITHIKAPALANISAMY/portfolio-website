export default function Navbar() {
  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        backdrop-blur-md
        bg-slate-950/80
        border-b
        border-white/10
        z-50
      "
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}

        <a
          href="#"
          className="
            text-2xl
            font-bold
            text-sky-400
            hover:text-sky-300
            transition
          "
        >
          Rithika P
        </a>

        {/* Navigation */}

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">

          <li>
            <a
              href="#about"
              className="hover:text-sky-400 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className="hover:text-sky-400 transition"
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-sky-400 transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-sky-400 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#certifications"
              className="hover:text-sky-400 transition"
            >
              Certifications
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-sky-400 transition"
            >
              Contact
            </a>
          </li>

          {/* Resume Button */}

          <li>
            <a
              href="/RITHIKA P_F249.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                bg-sky-500
                px-4
                py-2
                rounded-xl
                hover:bg-sky-600
                transition
              "
            >
              Resume
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
}