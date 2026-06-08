import FadeIn from "../components/FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About Me
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Passionate about building impactful software solutions,
          exploring emerging technologies and continuously improving
          as a developer.
        </p>

        <div
          className="
            max-w-5xl
            mx-auto
            bg-white/5
            backdrop-blur-lg
            border
            border-white/10
            rounded-3xl
            p-10
            hover:border-sky-400
            transition-all
            duration-300
          "
        >
          <p className="text-lg text-gray-300 leading-8">
            Hello! I'm{" "}
            <span className="text-sky-400 font-semibold">
              Rithika P
            </span>
            , a B.Tech Information Technology student at
            Karpagam College of Engineering with a strong interest in
            Full Stack Development, Artificial Intelligence and
            modern software engineering practices.
          </p>

          <p className="text-lg text-gray-300 leading-8 mt-6">
            I enjoy building scalable web applications using
            React.js, Spring Boot, MongoDB and MySQL. My focus is on
            creating user-friendly interfaces, efficient backend
            systems and real-world applications that solve meaningful
            problems.
          </p>

          <p className="text-lg text-gray-300 leading-8 mt-6">
            Through internships at NoviTech R&D Pvt. Ltd. and
            InternPe, I gained practical experience in frontend
            development, backend integration, responsive design,
            version control and collaborative software development.
          </p>

          <p className="text-lg text-gray-300 leading-8 mt-6">
            Beyond coding, I am passionate about learning new
            technologies, exploring AI-powered solutions and
            continuously improving my problem-solving skills through
            projects and hands-on development.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <span className="px-4 py-2 rounded-full bg-sky-500/10 text-sky-400">
              Full Stack Development
            </span>

            <span className="px-4 py-2 rounded-full bg-sky-500/10 text-sky-400">
              AI Applications
            </span>

            <span className="px-4 py-2 rounded-full bg-sky-500/10 text-sky-400">
              React.js
            </span>

            <span className="px-4 py-2 rounded-full bg-sky-500/10 text-sky-400">
              Spring Boot
            </span>

            <span className="px-4 py-2 rounded-full bg-sky-500/10 text-sky-400">
              MongoDB
            </span>

            <span className="px-4 py-2 rounded-full bg-sky-500/10 text-sky-400">
              Problem Solving
            </span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}