import FadeIn from "../components/FadeIn";

const internships = [
  {
    company: "NoviTech R&D Pvt. Ltd.",
    role: "Full Stack Development Intern",
    duration: "Sep 2024 - Nov 2024",
    image: "/internships/novitech-logo.png",
    certificate: "/internships/Novitech.jpeg",
    highlights: [
      "Developed responsive web interfaces using modern technologies",
      "Worked on frontend and backend integration",
      "Built scalable application features",
      "Collaborated in real-world development workflows",
    ],
  },

  {
    company: "InternPe",
    role: "Web Development Intern",
    duration: "Sep 2024 - Oct 2024",
    image: "/internships/internpe-logo.jpg",
    certificate: "/internships/Internpe.jpeg",
    highlights: [
      "Designed responsive web pages",
      "Implemented interactive UI components",
      "Improved frontend development skills",
      "Worked with modern web technologies",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Professional Experience
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14">
          Hands-on industry experience gained through internships in
          Full Stack Development and Web Development, working on
          real-world applications and modern development practices.
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {internships.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/5
                backdrop-blur-lg
                border
                border-white/10
                rounded-3xl
                overflow-hidden
                hover:-translate-y-2
                hover:border-sky-400
                hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]
                transition-all
                duration-300
              "
            >
              <div className="bg-white">
                <img
                  src={item.image}
                  alt={item.company}
                  className="
                    w-full
                    h-48
                    object-contain
                    p-4
                  "
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold">
                  {item.role}
                </h3>

                <p className="text-sky-400 mt-2">
                  {item.company}
                </p>

                <p className="text-gray-400 mt-3">
                  {item.duration}
                </p>

                <div className="mt-6">
                  <h4 className="text-sky-400 font-semibold mb-3">
                    Key Contributions
                  </h4>

                  <ul className="space-y-2 text-gray-300 text-sm">
                    {item.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2"
                      >
                        <span className="text-sky-400 mt-1">
                          ✔
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-green-500/10
                      text-green-400
                      text-sm
                    "
                  >
                    Internship Completed
                  </span>

                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      bg-sky-500
                      px-4
                      py-2
                      rounded-lg
                      hover:bg-sky-600
                      transition
                      text-sm
                    "
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}