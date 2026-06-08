import FadeIn from "../components/FadeIn";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Backend Development",
    skills: ["Spring Boot", "REST APIs"],
  },
  {
    title: "Database Technologies",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Developer Tools",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Figma",
      "Chrome DevTools",
    ],
  },
  {
    title: "AI & Integration",
    skills: [
      "Grok API",
      "Prompt Engineering",
      "AI Applications",
    ],
  },
  {
    title: "Computer Science Fundamentals",
    skills: [
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming",
      "MVC Architecture",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technical Skills
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14">
          A strong foundation in Full Stack Development,
          Backend Engineering, Databases, AI Integration
          and Software Development principles.
        </p>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
                bg-white/5
                backdrop-blur-lg
                border
                border-white/10
                rounded-3xl
                p-6
                hover:-translate-y-2
                hover:border-sky-400
                hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]
                transition-all
                duration-300
              "
            >
              <h3 className="text-xl font-semibold text-sky-400 mb-5">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      bg-slate-800
                      text-gray-300
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      hover:bg-sky-500
                      hover:text-black
                      transition
                      duration-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="
            max-w-7xl
            mx-auto
            mt-12
            bg-white/5
            backdrop-blur-lg
            border
            border-white/10
            rounded-3xl
            p-8
            text-center
          "
        >
          <h3 className="text-2xl font-bold text-sky-400 mb-4">
            Areas of Interest
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 rounded-full bg-sky-500/10 text-sky-400">
              Full Stack Development
            </span>

            <span className="px-4 py-2 rounded-full bg-sky-500/10 text-sky-400">
              Artificial Intelligence
            </span>

            <span className="px-4 py-2 rounded-full bg-sky-500/10 text-sky-400">
              Backend Engineering
            </span>

            <span className="px-4 py-2 rounded-full bg-sky-500/10 text-sky-400">
              Software Architecture
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