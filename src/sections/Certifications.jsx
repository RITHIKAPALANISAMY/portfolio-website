import FadeIn from "../components/FadeIn";

const certifications = [
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    file: "/certificates/frontend-react.pdf",
  },
  {
    title: "React (Basic)",
    issuer: "HackerRank",
    file: "/certificates/react-basic.pdf",
  },
  {
    title: "REST API (Intermediate)",
    issuer: "HackerRank",
    file: "/certificates/rest-api.pdf",
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    file: "/certificates/sql-basic.pdf",
  },
  {
    title: "CodeChef 500 Difficulty Rating",
    issuer: "CodeChef",
    file: "/certificates/codechef-500.pdf",
  },
  {
    title: "CodeChef Linked Lists",
    issuer: "CodeChef",
    file: "/certificates/codechef-linkedlist.pdf",
  },
  {
    title: "Networking Essentials",
    issuer: "Cisco Networking Academy",
    file: "/certificates/networking-essentials.pdf",
  },
  {
    title: "Introduction to Industry 4.0 & IIoT",
    issuer: "NPTEL",
    file: "/certificates/industry4.pdf",
  },
  {
    title: "The Joy of Computing Using Python",
    issuer: "NPTEL",
    file: "/certificates/joy-python.pdf",
  },
  {
    title: "MongoDB Basics for Students",
    issuer: "MongoDB",
    file: "/certificates/mongodb.pdf",
  },
  {
    title: "Full Stack Development MasterClass",
    issuer: "NoviTech",
    file: "/certificates/novitech-fsd.pdf",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Certifications & Achievements
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14">
          Continuous learning through industry-recognized certifications,
          technical assessments and professional development programs.
        </p>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
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
              <div className="flex items-start justify-between">
                <span
                  className="
                    text-xs
                    px-3
                    py-1
                    rounded-full
                    bg-sky-500/10
                    text-sky-400
                  "
                >
                  Certified
                </span>
              </div>

              <h3 className="text-xl font-semibold mt-4 leading-7">
                {cert.title}
              </h3>

              <p className="text-sky-400 mt-3">
                {cert.issuer}
              </p>

              <div className="flex gap-3 mt-6">
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    bg-sky-500
                    px-4
                    py-2
                    rounded-xl
                    hover:bg-sky-600
                    transition
                    text-sm
                  "
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>

        <div
          className="
            max-w-4xl
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
          <h3 className="text-2xl font-bold text-sky-400 mb-3">
            Learning Mindset
          </h3>

          <p className="text-gray-300 leading-7">
            I actively invest time in improving my technical expertise
            through certifications, hands-on projects, coding practice,
            and continuous exploration of modern technologies in
            Full Stack Development, Artificial Intelligence and
            Software Engineering.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}