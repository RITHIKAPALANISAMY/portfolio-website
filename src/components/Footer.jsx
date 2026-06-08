export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">

        <h3 className="text-2xl font-bold text-sky-400">
          Rithika P
        </h3>

        <p className="text-gray-400 mt-3">
          Full Stack Developer | React | Spring Boot | AI Applications
        </p>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Passionate about building modern web applications,
          solving real-world problems and creating impactful
          digital experiences through technology.
        </p>

        <div className="flex justify-center gap-8 mt-8">

          <a
            href="https://github.com/RITHIKAPALANISAMY"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rithika-p-57099a299"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:rithikapalanisamy22@gmail.com"
            className="hover:text-sky-400 transition"
          >
            Email
          </a>

        </div>

        <div className="mt-8 text-gray-500 text-sm">
          <p>Coimbatore, Tamil Nadu, India</p>
          <p className="mt-2">
            © 2026 Rithika P. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}