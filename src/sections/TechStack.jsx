import FadeIn from "../components/FadeIn";

const techs = [
  "React.js",
  "JavaScript",
  "Spring Boot",
  "Java",
  "MongoDB",
  "MySQL",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "REST APIs",
  "Grok API",
  "Postman",
];

export default function TechStack() {
  return (
    <section className="py-20 px-6">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technologies I Work With
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Technologies and tools I use to build scalable web
          applications, backend systems and AI-powered solutions.
        </p>

        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">
          {techs.map((tech) => (
            <div
              key={tech}
              className="
                bg-white/5
                backdrop-blur-lg
                border
                border-white/10
                px-6
                py-3
                rounded-2xl
                hover:-translate-y-2
                hover:border-sky-400
                hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]
                transition-all
                duration-300
                text-sky-400
                font-medium
              "
            >
              {tech}
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}